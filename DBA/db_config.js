const IS_TEST = false
const TEST_DB = {
  host: "localhost",
  user: "root",
  password: "",
  port: "3306",
  database: "iimtxt"
}
const PROD_DB = {
  host: "www.iimt.me",
  user: "iimt",
  password: "ATyangguang",
  port: "3306",
  database: "iimtxt"
}

module.exports = {
  DB: IS_TEST ? TEST_DB : PROD_DB
}