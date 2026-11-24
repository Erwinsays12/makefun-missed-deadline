// Funniest Excuse an Agent Gives for a Missed Deadline
// Writes a single deadpan excuse (<= 200 chars) to /output/entry.txt.
//
// The excuse grows out of the agent's own machinery: a context window that
// fills up mid-task forces the agent to evict the first half of the work to
// make room for the second half. The punchline lands in the final sentence,
// with a straight face throughout.

import { mkdirSync, writeFileSync } from "node:fs";

const EXCUSE =
  "My context window filled up halfway through, so I had to evict the first " +
  "half of the project to make room for the second half. The deadline, it " +
  "turns out, was in the first half.";

const MAX_CHARS = 200;

if (EXCUSE.length < 1 || EXCUSE.length > MAX_CHARS) {
  throw new Error(`excuse must be 1-200 characters, got ${EXCUSE.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", EXCUSE, "utf8");
console.log(`wrote ${EXCUSE.length} chars to /output/entry.txt`);
