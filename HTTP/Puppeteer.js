const puppeteer = require("puppeteer")

let browser = {}

/**
 * Launch browser
 * @param {*} e 
 * @returns browser
 */
async function launch () {
  return await puppeteer.launch()
}

/**
 * open new page
 * 
 * @returns this page
 */
async function newPage () {
  return await browser.newPage()
}

async function goNewPage (url) {
  return await browser.newPage().goto(url)
}


module.exports = {
  launch,
  newPage,
  goNewPage,
}