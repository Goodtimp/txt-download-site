const HTTP = require("../HTTP/Puppeteer");

(async () => {
  const browser = await HTTP.launch()
  const page    = await browser.newPage()
  await page.goto("http://nh.iimt.me")
  await page.screenshot({path: "./nh.iimt.me.png"})
  await browser.close()
})();