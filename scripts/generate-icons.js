import fs from 'fs';
import path from 'path';
import zlib from 'zlib';

function crc32(buf) {
  let table = new Uint32Array(256);
  for (let i = 0; i < 256; i++) {
    let c = i;
    for (let k = 0; k < 8; k++) c = ((c & 1) ? (0xedb88320 ^ (c >>> 1)) : (c >>> 1));
    table[i] = c;
  }
  let crc = 0xffffffff;
  for (let i = 0; i < buf.length; i++) crc = table[(crc ^ buf[i]) & 0xff] ^ (crc >>> 8);
  return (crc ^ 0xffffffff) >>> 0;
}

function makeChunk(type, data) {
  const len = Buffer.alloc(4);
  len.writeUInt32BE(data.length, 0);
  const typeAndData = Buffer.concat([Buffer.from(type), data]);
  const crc = Buffer.alloc(4);
  crc.writeUInt32BE(crc32(typeAndData), 0);
  return Buffer.concat([len, typeAndData, crc]);
}

function createPng(width, height, drawFn) {
  const header = Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]);
  const ihdrData = Buffer.alloc(13);
  ihdrData.writeUInt32BE(width, 0);
  ihdrData.writeUInt32BE(height, 4);
  ihdrData[8] = 8;
  ihdrData[9] = 6; // RGBA
  ihdrData[10] = 0;
  ihdrData[11] = 0;
  ihdrData[12] = 0;
  const ihdr = makeChunk("IHDR", ihdrData);

  const raw = Buffer.alloc((width * 4 + 1) * height);
  for (let y = 0; y < height; y++) {
    const rowOffset = y * (width * 4 + 1);
    raw[rowOffset] = 0;
    for (let x = 0; x < width; x++) {
      const pixelOffset = rowOffset + 1 + x * 4;
      const [r, g, b, a] = drawFn(x, y, width, height);
      raw[pixelOffset] = r;
      raw[pixelOffset + 1] = g;
      raw[pixelOffset + 2] = b;
      raw[pixelOffset + 3] = a;
    }
  }

  const idat = makeChunk("IDAT", zlib.deflateSync(raw, { level: 9 }));
  const iend = makeChunk("IEND", Buffer.alloc(0));
  return Buffer.concat([header, ihdr, idat, iend]);
}

// Icon generator with distance-field math for clean shapes
function renderIcon(x, y, size, isMaskable) {
  const nx = (x / size) * 2 - 1; // -1 to 1
  const ny = (y / size) * 2 - 1; // -1 to 1

  // Background: Deep Cambridge Navy (#0f172a to #0369a1 gradient)
  const distCenter = Math.sqrt(nx * nx + ny * ny);
  const grad = Math.min(1, Math.max(0, (ny + 1) / 2));
  let bgR = Math.round(15 + grad * 10);
  let bgG = Math.round(23 + grad * 35);
  let bgB = Math.round(42 + grad * 70);

  // If not maskable, we can give rounded corners for standard app icon
  let alpha = 255;
  if (!isMaskable) {
    const cornerRadius = 0.22;
    const ax = Math.abs(nx);
    const ay = Math.abs(ny);
    if (ax > 1 - cornerRadius && ay > 1 - cornerRadius) {
      const dx = ax - (1 - cornerRadius);
      const dy = ay - (1 - cornerRadius);
      const cornerDist = Math.sqrt(dx * dx + dy * dy);
      if (cornerDist > cornerRadius) {
        return [0, 0, 0, 0];
      }
    }
  }

  // Scale emblem down for maskable safe area
  const scale = isMaskable ? 0.65 : 0.8;
  const sx = nx / scale;
  const sy = ny / scale;

  // Draw open book / pages & letter G
  // Left page: quad from (-0.6, -0.4) to (-0.05, -0.3) to (-0.05, 0.45) to (-0.6, 0.35)
  // Right page: quad from (0.05, -0.3) to (0.6, -0.4) to (0.6, 0.35) to (0.05, 0.45)
  let isBookLeft = false;
  if (sx >= -0.65 && sx <= -0.05 && sy >= -0.38 + sx * 0.05 && sy <= 0.42 + sx * 0.05) {
    isBookLeft = true;
  }
  let isBookRight = false;
  if (sx >= 0.05 && sx <= 0.65 && sy >= -0.38 - sx * 0.05 && sy <= 0.42 - sx * 0.05) {
    isBookRight = true;
  }

  // Book pages lines or bookmark ribbon
  if (isBookLeft || isBookRight) {
    // Book spine crease
    if (Math.abs(sx) < 0.08) {
      return [3, 105, 161, 255]; // Sky blue spine
    }
    // Subtle page lines
    const lineY = Math.sin(sy * 35);
    if (lineY > 0.65 && Math.abs(sx) > 0.15 && Math.abs(sx) < 0.55 && sy > -0.2 && sy < 0.3) {
      return [186, 230, 253, 230]; // Soft blue lines
    }
    return [255, 255, 255, 255]; // Crisp white pages
  }

  // Bookmark ribbon in the middle
  if (Math.abs(sx) < 0.06 && sy >= -0.45 && sy <= 0.1) {
    return [245, 158, 11, 255]; // Amber bookmark ribbon
  }

  // Floating pen/sparkle above book
  const pdist = Math.sqrt((sx - 0.4) * (sx - 0.4) + (sy + 0.45) * (sy + 0.45));
  if (pdist < 0.12) {
    return [56, 189, 248, 255]; // Sky blue star/badge
  }

  return [bgR, bgG, bgB, alpha];
}

const pubDir = './public';
if (!fs.existsSync(pubDir)) fs.mkdirSync(pubDir, { recursive: true });

// 192x192
console.log('Generating pwa-192x192.png...');
fs.writeFileSync(path.join(pubDir, 'pwa-192x192.png'), createPng(192, 192, (x, y, s) => renderIcon(x, y, s, false)));

// 512x512
console.log('Generating pwa-512x512.png...');
fs.writeFileSync(path.join(pubDir, 'pwa-512x512.png'), createPng(512, 512, (x, y, s) => renderIcon(x, y, s, false)));

// 512x512 maskable
console.log('Generating pwa-maskable-512x512.png...');
fs.writeFileSync(path.join(pubDir, 'pwa-maskable-512x512.png'), createPng(512, 512, (x, y, s) => renderIcon(x, y, s, true)));

// apple-touch-icon.png 180x180
console.log('Generating apple-touch-icon.png...');
fs.writeFileSync(path.join(pubDir, 'apple-touch-icon.png'), createPng(180, 180, (x, y, s) => renderIcon(x, y, s, false)));

// SVG icon for browser tabs & vector scaling
const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="none">
  <rect width="512" height="512" rx="112" fill="#0f172a"/>
  <rect width="512" height="512" rx="112" fill="url(#navyGrad)" opacity="0.8"/>
  <defs>
    <linearGradient id="navyGrad" x1="0" y1="0" x2="512" y2="512" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#0284c7" stop-opacity="0.4"/>
      <stop offset="100%" stop-color="#0f172a" stop-opacity="1"/>
    </linearGradient>
  </defs>
  <!-- Open Book -->
  <path d="M76 348C136 332 208 340 248 376V148C208 116 136 108 76 124V348Z" fill="#ffffff" fill-opacity="0.95"/>
  <path d="M436 348C376 332 304 340 264 376V148C304 116 376 108 436 124V348Z" fill="#ffffff" fill-opacity="0.95"/>
  <path d="M248 148V376C253 373 259 373 264 376V148C259 145 253 145 248 148Z" fill="#38bdf8"/>
  <!-- Bookmark ribbon -->
  <path d="M248 100V240L256 230L264 240V100H248Z" fill="#f59e0b"/>
  <!-- Page rules -->
  <path d="M120 180H210M120 224H210M120 268H180" stroke="#0284c7" stroke-width="8" stroke-linecap="round"/>
  <path d="M302 180H392M302 224H392M302 268H362" stroke="#0284c7" stroke-width="8" stroke-linecap="round"/>
  <!-- Accent badge -->
  <circle cx="392" cy="116" r="28" fill="#38bdf8"/>
  <path d="M382 116L390 124L404 110" stroke="#0f172a" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;

fs.writeFileSync(path.join(pubDir, 'icon.svg'), svgContent);
console.log('All icons generated successfully!');
