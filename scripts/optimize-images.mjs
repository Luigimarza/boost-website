#!/usr/bin/env node
import { readdirSync, statSync, unlinkSync, existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..', 'public', 'events');
const MAX_WIDTH = 1600;
const QUALITY = 80;

let converted = 0;
let skipped = 0;
let bytesBefore = 0;
let bytesAfter = 0;

async function walk(dir) {
  for (const entry of readdirSync(dir)) {
    const p = join(dir, entry);
    const s = statSync(p);
    if (s.isDirectory()) await walk(p);
    else if (/\.(jpe?g)$/i.test(entry)) await convert(p);
  }
}

async function convert(jpgPath) {
  const webpPath = jpgPath.replace(/\.(jpe?g)$/i, '.webp');
  if (existsSync(webpPath)) {
    unlinkSync(jpgPath);
    skipped++;
    return;
  }
  const before = statSync(jpgPath).size;
  bytesBefore += before;
  const meta = await sharp(jpgPath).metadata();
  const pipeline = sharp(jpgPath).rotate();
  if (meta.width && meta.width > MAX_WIDTH) pipeline.resize({ width: MAX_WIDTH });
  await pipeline.webp({ quality: QUALITY }).toFile(webpPath);
  bytesAfter += statSync(webpPath).size;
  unlinkSync(jpgPath);
  converted++;
  if (converted % 25 === 0) console.log(`  ... ${converted} converted`);
}

if (!existsSync(ROOT)) {
  console.log(`[optimize-images] ${ROOT} not found — nothing to do.`);
  process.exit(0);
}

console.log(`[optimize-images] scanning ${ROOT} ...`);
await walk(ROOT);
const mb = (b) => (b / 1024 / 1024).toFixed(1);
console.log(
  `[optimize-images] done. converted=${converted} skipped=${skipped} ` +
    `before=${mb(bytesBefore)}MB after=${mb(bytesAfter)}MB`
);
