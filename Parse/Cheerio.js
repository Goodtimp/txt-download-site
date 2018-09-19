/**
 * 封装基于cheerio的HTML解析类
 * @author iimT
 */
class CheerioParse {
  constructor(html, options) {
    this.Cheerio = require("cheerio")
    this.$ = this.Cheerio.load(html)
  }

  /**
   * 重新加载html
   * @param {*} html 
   */
  reload(html, options) {
    this.$ = this.Cheerio.load(html)
    return this
  }

  /**
   * 获取选择起选中元素的内容
   * @param {*} query
   */
  getSelectorText(query) {
    return this.$(query).text()
  }

  /**
   * 获取选择起选中元素的html
   * @param {*} query 
   */
  getSelectorHtml(query) {
    return this.$(query).html()
  }

  /**
   * 获取选择起选中元素的属性
   * @param {*} query 
   * @param {*} attr
   */
  getSelectorAttr(query, attr) {
    return this.$(query).attr(attr)
  }

  /**
   * 获取选择起选中元素的值
   * @param {*} query
   */
  getSelectorVal(query) {
    return this.$(query).val()
  }

  /**
   * 获取网页所有a标签
   */
  getAllALabel() {
    return this.$('a')
  }
}


module.exports = {
  CheerioParse,
}