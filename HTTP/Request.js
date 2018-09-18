/**
 * author: @ goodtimep
 */ 

const request = require('request')

/**
 * 得到Url的Src
 */

function GetUrlSrc(url){

    request(url, function (error, response, body) {
  if (!error && response.statusCode == 200) {
    return body; // Show the HTML for the baidu homepage.
  }
})
}


module.exports={
    GetUrlSrc
}