
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

 /**
  * 得到url的编号（>0） -1为异常
  */
 function GetIdByUrl(url) { 
   try{
    let arr=String(url).split("book/")[1].split("/")
    let id=arr[0]
    return parseInt(id)

   }
   catch(err){
     return -1
   }  
}


module.exports={
  GetDomainName,
  GetIdByUrl
}

