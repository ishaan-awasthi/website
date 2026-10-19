export default function MusicPage() {
  return (
    <main className="page">
      <section className="index-list">
        <h1>music</h1>
      </section>
      <section className="music-layout">
        <div className="music-columns">
          <img className="album-cover" src="/music/hags.png" alt="HAGS! album art" />

          <section className="music-copy">
            <p>in my freshman year of high school, i had the idea of starting a rock band. i held some auditions for a six-person lineup and exercised a lot of parent-convincing -- and that was the start of "oddity."</p>
            <p>it was a weird crew. on paper we couldn't have been more different: our individual music tastes ranged from indian classical to latin funk to japanese power metal. but somehow, jamming together every week in our drummer's co-opted garage,<sup>1</sup> we found our sound. across our four year run we played multiple shows, released two full-length projects, and amassed over 60k+ streams across platforms.</p>
            <p>our magnum opus was "HAGS!" -- a concept album about the bittersweet summer between high school and college, each track a different genre. i led the general creative vision, from songwriting to composition to producing. would love for you to give it a listen!<sup>2</sup></p>
            <div className="music-footnotes">
              <p><sup>1</sup><span>shout out to vid's parents for putting up with us lmao</span></p>
              <p><sup>2</sup><span><a href="https://open.spotify.com/album/0BFrHdIbibaEccqQizGVtP" target="_blank" rel="noreferrer">https://open.spotify.com/album/0BFrHdIbibaEccqQizGVtP</a><br /><a href="https://instagram.com/oddity.music" target="_blank" rel="noreferrer">https://instagram.com/oddity.music</a></span></p>
            </div>
          </section>
        </div>
      </section>
      <a className="back-link" href="/things">back</a>
    </main>
  );
}
