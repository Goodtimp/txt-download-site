
const Mysql = require("../Mysql")
/**
 * 添加一个
 * @param {*} data 
 */
function insert(data) {
  data.sid = 1 //TODO: 默认为1  后面添加其他的站再改
  let sql = "insert into iimtxt.booksrc (bid, sid) values ("+ data.bid +", "+ data.sid +");"

  return new Promise((resolve, reject) => {
    let conn = Mysql.getConn()

    //resolve(conn)
    conn.query(sql, (err, result, fields) => {
      if(err) reject(err)
      resolve(result)
    })
    conn.end()
  })
}

module.exports = {
  insert,
}