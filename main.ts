import { mkdirSync, writeFileSync } from "node:fs";
import { text } from "./text.ts";
try { mkdirSync("/output", { recursive: true }); } catch {}
writeFileSync("/output/entry.txt", text, "utf8");
