"use client";
import { useState } from "react";
export default function AboutPage() {
  const [copied, setCopied] = useState(false);
  const copyEmail = async () => {
    await navigator.clipboard.writeText("ishaanawasthi05@gmail.com");
    setCopied(true);
  };
  return (
    <main className="page">
      <article className="copy">
        <p>
          i was born in april 2007. after many rounds of spirited debate between my
          parents and a subsequent ultimatum issued by my then four-year-old
          sister, i was given the name ishaan awasthi.<sup>1</sup>
        </p>
        <p>
          i first developed an interest in tech in my senior year of
          high school -- relatively late by my hometown bay area standards. i oscillate
          rapidly between regretting my tardiness and feeling incredibly
          grateful that i got here at all.<sup>2</sup>
        </p>
        <p>
          regardless, i'm on a mission to effectively and efficiently explore everything
          this world has to offer. my favorite part of the journey so far has been meeting
          cool people and making cool friends.<sup>3</sup>
        </p>
        <p>
          that brings us to the present. these days, i'm studying cs at the university of washington, with interests spanning
          theoretical neuroscience, self-organizing systems, evolutionary computing, and artificial life. i
          spend my free time in seattle asking myself "what if?" and diving
          headfirst into finding out the answer. if that sounds like you too, we
          should talk -- reach out!<sup>4</sup>
        </p>
        <div className="footnotes">
          <p>
            <span className="footnote-mark">
              <sup>1</sup>
            </span>
            <span>
              8.5 months later, the critically acclaimed drama{" "}
              <em>taare zameen par</em> swept indian box offices and cemented
              its main character, coincidentally also named "ishaan awasthi," as
              a pop culture icon. since then, it has been my life's goal to
              upstage aamir khan and finally reclaim my google seo.
            </span>
          </p>
          <p>
            <span className="footnote-mark">
              <sup>2</sup>
            </span>
            <span>
              on one hand, i know so little and there's so much left to learn.
              on the other hand, i know so little and there's so much left to
              learn.
            </span>
          </p>
          <p>
            <span className="footnote-mark">
              <sup>3</sup>
            </span>
            <span>
              shout outs to shubham, sahana, agasthya, douglas, shayaan, divij, tejas, mukund, 
              hawa, shah, arindam, aditi, vid, andy, paul, ricky, sahiti, gagan, suraj,
              dieter, aditi, ishani, ishan, agastya, matthew, arisha, and many
              more... (unordered/unexaustive. if you think you belong here,
              you probably do -- lmk so i can add you!)
            </span>
          </p>
          <p>
            <span className="footnote-mark">
              <sup>4</sup>
            </span>
            <span>
              <a href="https://linkedin.com/in/ishaan-awasthi">
                https://linkedin.com/in/ishaan-awasthi
              </a>
              <br />
              <a href="https://instagram.com/veryishaan">
                https://instagram.com/veryishaan
              </a>
              <br />
              <a href="https://x.com/veryishaan">https://x.com/veryishaan</a>
              <br />
              <a href="https://github.com/ishaan-awasthi">
                https://github.com/ishaan-awasthi
              </a>
              <br />
              <button className="email-button" onClick={copyEmail}>
                to:{" "}
                {copied
                  ? "ishaanawasthi05@gmail.com (copied)"
                  : "ishaanawasthi05@gmail.com (copy)"}
              </button>
            </span>
          </p>
        </div>
      </article>
      <a className="back-link" href="/">
        back
      </a>
    </main>
  );
}
