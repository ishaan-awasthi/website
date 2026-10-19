import Philosophy, { title as philosophyTitle } from "../articles/philosophy";
import NobodysHungryEveryonesStarving, { title as nobodysHungryEveryonesStarvingTitle } from "../articles/nobodys-hungry-everyones-starving";
import FunFacts, { title as funFactsTitle } from "../articles/fun-facts";
import HackedBill, { title as hackedBillTitle } from "../articles/hacked-bill";
import HouseholdNames, { title as householdNamesTitle } from "../articles/household-names";

const articles = {
  "1": { title: philosophyTitle, Content: Philosophy },
  "2": { title: nobodysHungryEveryonesStarvingTitle, Content: NobodysHungryEveryonesStarving },
  "3": { title: funFactsTitle, Content: FunFacts },
  "4": { title: hackedBillTitle, Content: HackedBill },
  "5": { title: householdNamesTitle, Content: HouseholdNames },
};

export function generateStaticParams() {
  return Object.keys(articles).map((slug) => ({ slug }));
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = articles[slug as keyof typeof articles] ?? articles["1"];
  const { Content } = article;

  return (
    <main className="page">
      <article className="article">
        <h1>{article.title}</h1>
        <Content />
      </article>
      <a className="back-link" href="/things/writings">back</a>
    </main>
  );
}
