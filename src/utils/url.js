const urlDev = "http://localhost:3000/v1" 
const urlQa = 'http://api.surile.cn/v1'
var url = ''
process.env.NODE_ENV === 'development' ? url = urlDev : url = urlQa
const excelUrl = url
export { excelUrl }