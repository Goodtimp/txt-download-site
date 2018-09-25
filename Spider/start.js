const pool=require("../HTTP/RequestPool")

let p=new pool.RequestPool(3)
p.push("https://www.qu.la/book/1/")
p.push("https://www.qu.la/book/2/")
p.push("https://www.qu.la/book/3/")
p.push("https://www.qu.la/book/4/")
p.push("https://www.qu.la/book/5/")
p.push("https://www.qu.la/book/6/")

function f(list) {console.log(list)  }
p.RunGetName(f)

