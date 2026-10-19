import assert from "node:assert/strict";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("http://localhost/", {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("server-renders the animated type canvas", async () => {
  const response = await render();
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
