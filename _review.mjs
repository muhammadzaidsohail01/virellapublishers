import { chromium } from "playwright";

const url = "http://localhost:3000";
const browser = await chromium.launch();

const shots = [
  { name: "mobile-full", width: 390, height: 844, full: true },
  { name: "mobile-hero", width: 390, height: 844, full: false },
  { name: "desktop-full", width: 1366, height: 900, full: true },
  { name: "desktop-hero", width: 1366, height: 900, full: false },
];

for (const s of shots) {
  const context = await browser.newContext({
    viewport: { width: s.width, height: s.height },
    deviceScaleFactor: 1,
    reducedMotion: "reduce",
  });
  const page = await context.newPage();
  await page.goto(url, { waitUntil: "domcontentloaded", timeout: 60000 });
  await page.waitForTimeout(3000);
  await page.screenshot({ path: `_shots/${s.name}.png`, fullPage: s.full });
  await context.close();
  console.log("captured", s.name);
}

await browser.close();
console.log("done");
