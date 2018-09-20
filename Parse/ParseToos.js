/**
 * author : @goodtimep
 */

 /**
  * 
  */
 function GetDomainName(url)
 {
   return String(url).replace("https://","").replace("http://","").split("/")[0];
 }

 


module.exports={
  GetDomainName
}

