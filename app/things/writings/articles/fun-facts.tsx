import katex from "katex";

const numberSet = katex.renderToString(String.raw`\{n \in \mathbb{Z} \mid 52 \ge n \ge 1\}`, { throwOnError: false });

export const title = <>fun facts about <span className="math-title" dangerouslySetInnerHTML={{ __html: numberSet }} /></>;

const facts = [
  [52, "the number of cards in a deck"],
  [51, "universally associated with aliens because of area 51"],
  [50, "minimum probability required for preponderance of the evidence"],
  [49, "peak of the california gold rush, giving the name 49ers"],
  [48, "largest two-digit number where the first digit is half the second"],
  [47, "year of india’s independence"],
  [46, "3 presidents were born this year (clinton, gwb, and trump)"],
  [45, "number of minutes in each half of football"],
  [44, "common time signature in music theory (4/4)"],
  [43, "the number 143 means i love you"],
  [42, "the answer to life, the universe, and everything"],
  [41, "homophone for the phrase “for one”"],
  [40, "only multiple of ten that is a homophone for its 1-digit counterpart"],
  [39, "slang for “thank you” in japanese"],
  [38, "number of works associated with shakespeare"],
  [37, "typical body temperature"],
  [36, "= 1+2+…+8"],
  [35, "minimum age to run for president"],
  [34, "a rule of the internet"],
  [33, "max verstappen’s car number"],
  [32, "original prediction for personal computing was 32-bit"],
  [31, "original number of flavors and logo of baskin robbins"],
  [30, "only two numbers used in a face (:3 and :0)"],
  [29, "number of years a japanese soldier kept fighting after wwii ended"],
  [28, "number of days in the moon’s cycle"],
  [27, "e = 2.7"],
  [26, "the area code of j cole’s hometown in north carolina"],
  [25, "the number of months my girlfriend and i were long distance (2.5)"],
  [24, "number of karats in pure gold"],
  [23, "pairs of chromosomes"],
  [22, "toronto slang “two twos my word”"],
  [21, "sikhs in battle of saranghari"],
  [20, "the percentage of orange cats that are female"],
  [19, "number of notes in the most common microtonal split"],
  [18, "the only amendment that later got overturned (prohibition)"],
  [17, "represents togetherness in hindi, “ek saath”"],
  [16, "my girlfriend and i started dating on the 16th of july"],
  [15, "the ides of march when caesar was killed"],
  [14, "i’m fourteen and this is deep"],
  [13, "number of lunar cycles in a year"],
  [12, "my favorite legal drama is 12 angry men"],
  [11, "what my girlfriend is on a scale from 1-10"],
  [10, "the marching band call to attention"],
  [9, "anagram + homophone nein is german for no"],
  [8, "the number of colleges at ucsd"],
  [7, "contains the opposite parity (s[even])"],
  [6, "nickname for toronto from the area codes/original six districts"],
  [5, "explain like i'm five"],
  [4, "4-sided shapes have their own subclass (quadrilaterals)"],
  [3, "california's trinity alps named after their red/white/green ridges"],
  [2, "pk's two gods: the one that created us and the one we created"],
  [1, "only number in reverse alphabetical order"]

] as const;

export default function FunFacts() {
  return (
    <div className="article-copy fun-facts-copy">
      <p>in summer of 2026, my girlfriend and i were long distance since she was interning in the seattle metro area and i in the bay. in an attempt to make the wait more bearable, i told her a fun fact for every day we were apart. here they are presented in reverse chronological order:</p>
      <ol className="fun-facts-list">
        {facts.map(([number, fact]) => <li key={number}><span>{number}</span><span>{fact}</span></li>)}
      </ol>
    </div>
  );
}
