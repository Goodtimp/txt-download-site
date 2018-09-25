const mysql = require("mysql")
const BooksModel = require("./Model/Books")
const SourceModel = require("./Model/Source")

/**
 * 测试上传一本书  名字叫 ttt
 */

BooksModel.insert({name: "ttt"}).then(res => {
  console.log(res)
  
}).catch(err => {
  console.log(err)
})

/**
 * 测试添加一个bookid id为3
 */

SourceModel.insert({bid: 3}).then(res => {
  console.log(res)
  
}).catch(err => {
  console.log(err)
})