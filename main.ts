// Monday, Reviewed in One Line — the one-line review is written to entry.txt
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const line = "Monday arrived early, asked what I did all weekend, then stayed until Friday like it owned the place.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
const entryPath = join(outDir, "entry.txt");
mkdirSync(outDir, { recursive: true });
writeFileSync(entryPath, line, "utf8");
