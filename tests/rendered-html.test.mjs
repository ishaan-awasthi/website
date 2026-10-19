import assert from "node:assert/strict";
import { spawn } from "node:child_process";
import { once } from "node:events";
import { createServer } from "node:net";
import { fileURLToPath } from "node:url";
import { setTimeout } from "node:timers/promises";
import test, { after, before } from "node:test";

let server;
let baseUrl;
let serverOutput = "";

before(async () => {
  const socket = createServer();
  socket.listen(0, "127.0.0.1");
  await once(socket, "listening");
  const { port } = socket.address();
  await new Promise((resolve) => socket.close(resolve));
  baseUrl = `http://127.0.0.1:${port}`;

  server = spawn(process.execPath, [
    fileURLToPath(new URL("../node_modules/next/dist/bin/next", import.meta.url)),
    "start", "--hostname", "127.0.0.1", "--port", String(port),
  ], {
    cwd: fileURLToPath(new URL("..", import.meta.url)),
    stdio: ["ignore", "pipe", "pipe"],
  });
  server.on("error", (error) => { serverOutput += error.message; });
  server.stdout.on("data", (data) => { serverOutput += data; });
  server.stderr.on("data", (data) => { serverOutput += data; });

  const deadline = Date.now() + 30_000;
  while (Date.now() < deadline) {
    if (server.exitCode !== null) break;
    try {
      const response = await fetch(baseUrl);
      await response.arrayBuffer();
      if (response.ok) return;
    } catch {
      // The production server may still be starting.
    }
    await setTimeout(100);
  }
  throw new Error(`Next.js production server did not start:\n${serverOutput}`);
});

after(async () => {
  if (!server || server.exitCode !== null || server.signalCode !== null) return;
  const exited = once(server, "exit");
  server.kill("SIGTERM");
  await exited;
});

test("server-renders the animated type canvas", async () => {
  const response = await fetch(baseUrl);
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<title>ishaan awasthi<\/title>/i);
  assert.match(html, /class="marquee"/i);
  assert.match(html, /class="top-nav"/i);
  assert.match(html, /href="\/about"/i);
  assert.match(html, /href="\/things"/i);
  assert.match(html, /class="letter-y">y<\/span>/i);
  assert.match(html, /aria-hidden="true"/i);
  assert.doesNotMatch(html, /codex-preview|react-loading-skeleton/i);
});

test("serves all existing pages and articles in production", async () => {
  const routes = [
    "/about", "/blank", "/things", "/things/bookshelf", "/things/gallery",
    "/things/gallery2", "/things/miscellany", "/things/music", "/things/projects",
    "/things/videos", "/things/writings",
    ...[1, 2, 3, 4, 5].map((slug) => `/things/writings/${slug}`),
  ];
  for (const route of routes) {
    const response = await fetch(`${baseUrl}${route}`);
    assert.equal(response.status, 200, route);
    assert.match(await response.text(), /<main\b/, route);
  }
});

test("serves compiled styles, fonts, images, and seekable project videos", async () => {
  const html = await (await fetch(baseUrl)).text();
  const stylesheet = html.match(/href="([^\"]+\.css(?:\?[^\"]*)?)"/);
  assert.ok(stylesheet, "Next.js emits a stylesheet");
  const css = await fetch(new URL(stylesheet[1].replaceAll("&amp;", "&"), baseUrl));
  assert.equal(css.status, 200);
  assert.match(await css.text(), /marquee/);

  for (const path of ["/favicon.svg", "/bookshelf/shelf-cropped.png", "/assets/fonts/KaTeX_Main-Regular.woff2", "/projects/cook/readme.html"]) {
    const response = await fetch(`${baseUrl}${path}`);
    assert.equal(response.status, 200, path);
    await response.arrayBuffer();
  }
  const video = await fetch(`${baseUrl}/projects/media/zenbuddies.mp4`, {
    headers: { Range: "bytes=0-1023" },
  });
  assert.equal(video.status, 206);
  assert.match(video.headers.get("content-type"), /^video\/mp4/);
  assert.equal((await video.arrayBuffer()).byteLength, 1024);
});
