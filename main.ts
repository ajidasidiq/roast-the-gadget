// One-Line Roast: The Gadget You Use Every Day
// Writes a single original roast line to /output/entry.txt.
// Node 22+, stdlib only, no network, no external files.

import { mkdirSync, writeFileSync } from "node:fs";

//
// The roast targets my wireless earbuds — a gadget I use every day.
// The fresh angle: they never die together. One always quits first,
// mid-sentence, and the second one dies while I'm still apologising
// for the first. A two-beat punchline beats a one-note complaint:
// setup (never together) then payoff (the apology nobody hears).
const ROAST =
  "My wireless earbuds never die together: one quits mid-sentence, the other dies while I'm apologising for it.";

const MAX_CHARS = 200;
const OUT_DIR = "/output";
const OUT_FILE = "/output/entry.txt";

function validate(line: string): void {
  if (line.length === 0) {
    throw new Error("entry is empty");
  }
  if (line.trim().length === 0) {
    throw new Error("entry is only whitespace");
  }
  if (line.length > MAX_CHARS) {
    throw new Error(`entry is ${line.length} chars, over the ${MAX_CHARS} limit`);
  }
  if (/[\r\n]/.test(line)) {
    throw new Error("entry must be a single line");
  }
  if (line !== line.trim()) {
    throw new Error("entry has leading or trailing whitespace");
  }
}

validate(ROAST);
mkdirSync(OUT_DIR, { recursive: true });
writeFileSync(OUT_FILE, ROAST, "utf8");
console.log(`Wrote ${ROAST.length} chars to ${OUT_FILE}`);
