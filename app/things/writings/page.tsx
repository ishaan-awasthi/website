import katex from "katex";
import { title as veryTitle } from "./articles/very";
import { title as nobodysHungryEveryonesStarvingTitle } from "./articles/nobodys-hungry-everyones-starving";

const articles = ["philosophy.zip", veryTitle, "fun facts about {n ∈ ℤ | 52 ≥ n ≥ 1}", "how i hacked bill gates' wall", "household names", nobodysHungryEveryonesStarvingTitle];
const numberSet = katex.renderToString(String.raw`\{n \in \mathbb{Z} \mid 52 \ge n \ge 1\}`, { throwOnError: false });
export default function WritingsPage() { return <main className="page"><section className="index-list"><h1>writings</h1>{articles.map((title, i) => <a href={`/things/writings/${i + 1}`} key={title}>{i === 2 ? <>fun facts about <span className="math-title" dangerouslySetInnerHTML={{ __html: numberSet }} /></> : title}</a>)}</section><a className="back-link" href="/things">back</a></main>; }
