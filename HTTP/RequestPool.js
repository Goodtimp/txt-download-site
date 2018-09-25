
const async = require("async")
const Request = require("./Request")

class RequestPool {
  constructor(MaxAsnyc) {
    this.MaxAsnyc = MaxAsnyc
    this.listUrl = []
    this.listNoneUrl=[]
  }
  /**
   * push url
   */
  push(url) {
    this.listUrl.push(url)
  }
  pushArry(urls){
    this.listUrl.concat(urls)
  }
  
  /**
   * 得到name
   * @param {url root} root 
   * @param {start pos} MinCnt 
   * @param {end pos} MaxCnt 
   * @param {max async} MaxAsnyc 
   * @param {回调函数参数为list} callbackopt 
   */
  RunGetName(callbackopt) {
    //console.log(listUrl)
    async.mapLimit(this.listUrl, this.MaxAsnyc, function (url, callback) {
      Request.RunOneAsnycGetName(url, callback)
      },
      function (err, results) {
        //console.log(results)
        callbackopt(results)
      })
  }
}

module.exports = {
  RequestPool
}
