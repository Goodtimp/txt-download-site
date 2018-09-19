/**
 * 数据库操作类
 * @author iimT
 */

const Mysqli = require("mysql")


function getConn() {
  let dbConfig = require("./db_config")
  let conn = Mysqli.createConnection(dbConfig.DB)
  conn.connect()

  return conn
}

function query(sql) {
  let that = this
  return new Promise( (resolve, reject) => {
    that.conn.query(sql, (err, result, fields) => {
      if(err) reject(err)
      resolve(results, that.conn)
    })
  })
}

class Mysql {
  /**
   * 构造函数 传入数据库信息
   * @param {*} options 
   */
  constructor (options) {
    this.conn = Mysqli.createConnection(options)
    return this.conn
  }

  /**
   * 链接数据库
   */
  connect() {
    this.conn.connect()
    return this.conn
  }

  useTable(tableName) {
    return tableName
  }

  query(sql) {
    let that = this
    return new Promise( (resolve, reject) => {
      that.conn.query(sql, (err, result, fields) => {
        if(err) reject(err)
        resolve(results, that.conn)
      })
    })
  }

  /**
   * 结束conn (在此之前完成所有的操作)
   */
  end() {
    this.conn.end()
  }
}


module.exports = {
  Mysql,
  getConn,
  query
}











