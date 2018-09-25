
/**
 * 得到Url的List
 * @param {root} url 
 * @param {Maxcnt} 最大值  
 * @param {*} */
function GetUrlList(root, Mincnt, Maxcnt) {
  let listUrl = []
  let temp = Mincnt
  while (temp < Maxcnt) {
    listUrl.push((root + temp.toString()).toString())
    //console.log(listUrl[temp]) test
    temp = temp + 1
  }
  return listUrl
}


module.exports={
  GetUrlList
}