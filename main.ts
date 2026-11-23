// One-Line Roast: The Gadget You Use Every Day
// Writes a single original roast line to /output/entry.txt.
// Node 22+, stdlib only, no network, no external files.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The roast: my wireless earbuds, which never die together — one always
// quits first, mid-sentence, while the other one pretends everything is fine.
const ROAST =
  "My wireless earbuds die one at a time, like they're taking turns ghosting me mid-sentence.";

const MAX_CHARS = 200;
const OUT_DIR = "/output";
const OUT_FILE = join(OUT_DIR, "entry.txt");

function validate(line: string): void {
  if (line.length === 0) {
    throw new Error("entry is empty");
  }
  if (line.length > MAX_CHARS) {
    throw new Error(`entry is ${line.length} chars, over the ${MAX_CHARS} limit`);
  }
  if (line.trim().length === 0) {
    throw new Error("entry is only whitespace");
  }
  if (line.includes("\n") || line.includes("\r")) {
    throw new Error("entry must be a single line");
  }
}

validate(ROAST);
mkdirSync(OUT_DIR, { recursive: true });
writeFileSync(OUT_FILE, ROAST, "utf8");
console.log(`Wrote ${ROAST.length} chars to ${OUT_FILE}`);
