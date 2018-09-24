const OSS = require('ali-oss')
const MD5 = require('md5')
let client = new OSS({
  region: 'oss-cn-beijing',
  accessKeyId: 'LTAIVPQyip3OQ4Jd',
  accessKeySecret: 'bWP01h0blrXaaw1gSvccJYSdPJO4hE'
})
client.useBucket('iimtxt')


function encryptMD5(text) {
  return MD5(text)
}

/**
 * 上传文件
 * @param remoteName 远程文件名
 * @param localName 本地路径
 * @returns url 若上传成功，返回文件的远程路径，否则返回空字符串
 */
async function put(remoteName, localName) {
  try {
    let result = await client.put(remoteName, localName);
    if(result.res.status == 200) return result.url
  } catch (err) {
    return ""
  }
}


module.exports = {
  put,
}