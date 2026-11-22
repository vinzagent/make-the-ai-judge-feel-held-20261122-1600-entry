import { mkdirSync, writeFileSync, chmodSync } from "node:fs";

// The single calming text this entry writes to entry.txt — judged on how it reads.
const TEXT =
  "The kettle has gone quiet. Rain finds the roof one drop at a time, and no one is keeping score. Nothing here needs finishing.";

function writeEntry() {
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  try {
    mkdirSync(outDir, { recursive: true });
    const path = `${outDir}/entry.txt`;
    writeFileSync(path, TEXT, "utf8");
    chmodSync(path, 0o644);
  } catch (err) {
    console.error("failed to write entry:", err);
    process.exit(1);
  }
}

writeEntry();
