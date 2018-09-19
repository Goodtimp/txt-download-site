/**
 * author: @ goodtimep
 */ 

const request = require('request')
const headers = {
  'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2490.80 Safari/537.36'
}

/**
 * 得到Url的Src
 */

function GetUrlSrc(url){

    return new Promise( (resolve, reject) => {
      request(url, {headers: headers}, (error, response, body) => {
        if (!error && response.statusCode == 200) {
          resolve(body)
        } else {
          reject(response)
        }
      })
  })
}


module.exports={
    GetUrlSrc
}