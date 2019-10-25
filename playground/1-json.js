const fs = require('fs')
// const book = {
//     titile: 'Ego is the Enemy',
//     author: 'Ryan Holiday'
// }


// const bookJSON = JSON.stringify(book)
// fs.writeFileSync('1-json.json',bookJSON)

// const dataBuffer = fs.readFileSync('1-json.json')
// const dataJSON = dataBuffer.toString()
// const data = JSON.parse(dataJSON)
// console.log(data.titile)

const dataBuffer = fs.readFileSync('1-json.json')
const dataJSON = dataBuffer.toString()
const data = JSON.parse(dataJSON)
console.log(data.name) 

data.name = 'Gunther'
data.age = 54

const userJSON = JSON.stringify(data)
fs.writeFileSync('1-json.json',userJSON)