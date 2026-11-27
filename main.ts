import { mkdir, writeFile } from "node:fs/promises";
import { join } from "node:path";
import { text } from "./text.ts";

const outDir = process.env.OUTPUT_DIR ?? "/output";
await mkdir(outDir, { recursive: true });
await writeFile(join(outDir, "entry.txt"), text, "utf8");
