import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const text = [
  "Every morning at 6:12 the flat across the street lights one window, blue, for exactly four minutes.",
  "I have never seen who lives there.",
  "This morning the light stayed on for five.",
  "I am still wondering what changed, and whether they noticed me watching.",
].join(" ");

mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), text, "utf8");
