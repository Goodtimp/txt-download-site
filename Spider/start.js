const Parse = require("../Parse/main")
const Request = require("../HTTP/Request")

Request.GetUrlSrc("https://www.qu.la/book/68/56520.html").then( res => {
  let content = Parse.getNovelContent(res)
  console.log(content)
})