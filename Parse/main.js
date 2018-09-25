
/**
 * parse
 */


/**
 * 获取cheerio的$实例
 */
function getCheerio(html) {
  const Cheerio = require("./Cheerio")
  return new Cheerio.CheerioParse(html)
}

/**
 * 获取网页源代码所有a标签的链接
 * @param url 网页地址
 * @returns links 链接数组
 */
function getLinkAll(html) {
  let $ = getCheerio(html)
  let ALabel = $.getAllALabel()
  let links = []

  ALabel.forEach(e => {
    links.push(e.href)
  })

  return links
}

/**
 * 获取网页中小说的内容
 * @param {*} html 
 */
function getNovelContent(html) {
  let $ = getCheerio(html)
  let content = $.getSelectorText("#content").toString()
  content = content.replace(/    /ig, "")
  return content
}


/**
 * 获取名字
 */
function GetNameByHtml(html) {
  let $ = getCheerio(html)

  let name = $.getSelectorText("#info h1").toString()

  return name
}

/**
 * 获取作者
 */
function GetAuthorByHtml(html) {
  let $ = getCheerio(html)
  let author = $.getSelectorText("#info p").toString().split("：")[1].split(" ")[0]
  return author
}




module.exports = {
  getLinkAll,
  getNovelContent,
  GetNameByHtml,
  GetAuthorByHtml

}