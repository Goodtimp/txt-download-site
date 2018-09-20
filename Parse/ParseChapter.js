const Nzh   = require("nzh");
const nzhcn = Nzh.cn
/**
 * 获取章节的章节号
 * @returns int
 */
function parseChapterNumber(text) {
  let num      = 0
  let start    = false
  let num_text = ""

  //找数字
  for (var i = 0; i < text.length; i++) {
    if(isDecimal(text[i])) {
      num_text += text[i]
      while(isDecimal(text[++i])) {
        num_text += text[i]
      }
      break
    }
  }
  if(num_text != "")
    return parseInt(num_text)
  
  //中文处理
  let startIndex = 0, endIndex = text.indexOf("章")
  if(text[0] == "第") startIndex = 1
  let chinese_num = text.substr(startIndex, (endIndex - startIndex))
  return nzhcn.decodeS(chinese_num)
}

/**
 * 判断字符是否为数字
 * @param {*} word 
 */
function isDecimal(word) {
  let number = "0123456789"
  for(var i in number) {
    if(parseInt(word) == parseInt(number[i])) {
      return true
    }
  }
  return false
}

module.exports = {
  parseChapterNumber,
}
