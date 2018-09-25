/**
 * author: @goodtimep
 */
const fs = require('fs')


/**
 * 输入path，content，异步覆盖写入txt文件 正常返回path 异常返回error
 */

function WriteCoverFile(path, content) {
  return new Promise((resolve, reject) => {
    fs.writeFile(path, String(content), function (err) {
      if (err) {
        reject(error)
      }
      else resolve(path)
    })
  })

}

/**
 * 输入path，content，异步追加写入txt文件 正常返回path 异常返回error
 */

function WriteAddToFile(path, content) {
  return new Promise((resolve, reject) => {
    fs.appendFile(path, String(content), function (err) {
      if (err) {
        reject(error)
      }
      else resolve(path)
    })
  })
}

module.exports = {
  WriteAddToFile,
  WriteCoverFile
}

//WriteAddToFile("aa.txt","Hello World!").then(path=> {WriteCoverFile(path,"daf")})
