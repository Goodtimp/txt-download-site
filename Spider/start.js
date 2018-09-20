const Parse = require("../Parse/main")
const Request = require("../HTTP/Request")
let cnt, cntAsnycEnd, listData = []
//Request.GetUrlSrc("https://www.qu.la/book/68").then(res => {
// let content = Parse.GetAuthorByHtml(res)
// console.log(content)
//})




/**
 * 开始一个异步请求  无法返回
 */

function RunOneAsnyc(MaxCnt, MaxAsnyc) {

  if (cnt >= MaxCnt) {
    // cntAsnycEnd = cntAsnycEnd + 1
    // if(cntAsnycEnd==MaxAsnyc) 
    // {
    //   listData.forEach(element => {
    //     console.log(element.pos+"  " + element.name + "   OFF")
    //   });
    // }
    return
  }
  let tempCnt = cnt //防止cnt异步修改不一致
  cnt = cnt + 1
  //console.log(tempCnt.toString())//test
  Request.GetUrlSrc("https://www.qu.la/book/" + tempCnt.toString()).then(res => {
    let name = Parse.GetNameByHtml(res)
    data = {
      name: name,
      pos: tempCnt
    }
    //console.log(tempCnt.toString() + "   " + name)//test
    listData[data.pos] = data
    RunOneAsnyc(MaxCnt, MaxAsnyc)
  }).catch(jes => {
    //console.log("TimeOut")
    data = {
      name: "None",
      pos: tempCnt
    }
    listData[data.pos] = data
    RunOneAsnyc(MaxCnt, MaxAsnyc)
  })
  return
}

/**
 * 最大数值,最大异步量
 */

function run(MaxCnt, MaxAsnyc) {
  cnt = 1
  cntAsnycEnd = 0
  let cntAsnyc = 0
  while (cntAsnyc < MaxAsnyc) {
    console.log(cntAsnyc.toString() + " runing")
    RunOneAsnyc(MaxCnt, MaxAsnyc)
    cntAsnyc = cntAsnyc + 1
  }

}

run(40, 3)
