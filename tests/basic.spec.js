const puppeteer = require('puppeteer');

let browser;

beforeAll(async () => {
    browser = await puppeteer.launch();
});

afterAll(async () => {
    await browser.close();
});

it('umd', async () => {
    const page = await browser.newPage();
    await page.goto('http://localhost:5000/umd');

    const container = await page.$('#emails-editor');
    const box = await container.boundingBox();

    const image = await page.screenshot({
        omitBackground: true,
        clip: box
    });

    expect(image).toMatchImageSnapshot();
});
