import { mkdirSync, writeFileSync, chmodSync } from "node:fs";

const TEXT =
  "The kettle has gone quiet. Rain finds the roof one drop at a time, and no one is keeping score. Nothing here needs finishing.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const path = `${outDir}/entry.txt`;
writeFileSync(path, TEXT, "utf8");
chmodSync(path, 0o644);
