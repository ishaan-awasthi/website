import HomeImage from "./HomeImage";

export default function Home() {
  const repeatedText = Array.from({ length: 100 }, (_, index) => (
    <span className="marquee-word" key={index}>
      {index === 73 ? "VERY" : <>ver<span className="letter-y">y</span></>}
    </span>
  ));

  return (
    <main className="site-canvas">
      <HomeImage />

      <nav className="top-nav" aria-label="Main navigation">
        <a href="/about">about</a>
        <a href="/things">things</a>
        <a href="/blank">blank</a>
      </nav>

      <div className="marquee" aria-hidden="true">
        <div className="marquee-track">
          <div className="marquee-group">{repeatedText}</div>
          <div className="marquee-group">{repeatedText}</div>
        </div>
      </div>
    </main>
  );
}
