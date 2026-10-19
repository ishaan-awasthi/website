export default function VideosPage() {
  return (
    <main className="page">
      <section className="index-list"><h1>videos</h1></section>
      <article className="copy videos-copy">
        <p>i occasionally make videos! highlights include: a dystopian parody of hackathon pitches which ironically won calhacks, a travel vlog of being homeless in north carolina for 24 hours, and a shitty car edit chronicling american innovation in the automobile industry.</p>
        <p>if this is of interest to you, check out my youtube<sup>1</sup></p>
        <div className="footnotes">
          <p><span className="footnote-mark"><sup>1</sup></span><span><a href="https://www.youtube.com/@ishaanawasthi416/videos" target="_blank" rel="noreferrer">https://www.youtube.com/@ishaanawasthi416/videos</a></span></p>
        </div>
      </article>
      <a className="back-link" href="/things">back</a>
    </main>
  );
}
