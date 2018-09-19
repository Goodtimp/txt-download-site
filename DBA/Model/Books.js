
const Mysql = require("../Mysql")
/**
 * 添加一个
 * @param {*} data 
 */
function insert(data) {
  let sql = "insert into iimtxt.books (`name`) value ('" + data.name + "');"

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