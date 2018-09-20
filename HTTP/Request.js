/**
 * author: @ goodtimep
 */ 

const request = require('request')
const MaxTimeOut = 10000
const headers = {
  'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2490.80 Safari/537.36'
}

/**
 * 得到Url的Src
 */

function GetUrlSrc(url){
    let data={}
    return new Promise( (resolve, reject) => {
      request(url, {headers: headers}, (error, response, body) => {
        //response.setTimeout(1,function(){reject("TimeOut")})
        if (!error && response.statusCode == 200) {
          data={
            data:body,
            ret:200,
            msg:"请求成功"
          }
          resolve(body)//改
        } else {
          data={
            data:url,
            //ret:response.statusCode,//可能报错 Cannot read property 'statusCode' of undefined 
            ret:404,
            msg:"请求失败"
          }
          reject(data)
        }
      })
      setTimeout(() => {
        data={
          data:url,
          ret:100,
          msg:"请求失败"
        }
        reject(data)
      }, MaxTimeOut);
  })
}

GetUrlSrc("www.baidu.com")

module.exports={
    GetUrlSrc
}