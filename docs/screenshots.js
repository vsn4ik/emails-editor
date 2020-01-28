import fs from 'fs';
import path from 'path';
import puppeteer from 'puppeteer';

const padding = 10; // px
const dirname = path.resolve();

const browser = await puppeteer.launch({
    args: [
        '--no-sandbox',
        '--headless',
        '--disable-gpu',
        '--allow-file-access-from-files',
        '--disable-translate',
        '--disable-extensions'
    ]
});

const page = await browser.newPage();
const files = fs.readdirSync(`${dirname}/docs/screenshots/`);

for (const file of files) {
    const ext = path.extname(file);

    if (ext !== '.html') {
        continue;
    }

    const name = path.basename(file, ext);
    const url = `file://${dirname}/docs/screenshots/${file}`;

    await page.goto(url, {
        waitUntil: 'networkidle2'
    });

    const container = await page.$('#emails-editor');

    // TODO: playwright - getBoundingBoxForScreenshot
    const box = await container.boundingBox();

    await page.screenshot({
        path: `${dirname}/docs/screenshots/${name}.png`,
        omitBackground: true,
        clip: {
            y: Math.max(box.y - padding, 0),
            x: Math.max(box.x - padding, 0),
            width: box.width + 2 * padding,
            height: box.height + 2 * padding
        }
    });
}

await browser.close();
