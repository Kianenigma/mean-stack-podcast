const fs = require('fs')

// Buffer
const buf1 = Buffer.from([1,2,3,4,85])
const buf2 = Buffer.from('easy')
const buf3 = Buffer.alloc(10)

console.log(buf1)
console.log(buf2)
console.log(buf3)

// Stream 
const ws = fs.createWriteStream('./ws.txt')

ws.on('open', (fd) => {
  fs.write(fd, buf2, 2, 2, (err, written) => {
    console.log(err, written)
  })
})

const ws2 = fs.createWriteStream('./ws2.txt')
ws2.write('easy')

const rs = fs.createReadStream('./ws2.txt')
let data = [] 

rs.on('data', (chunk) => {
  data.push(chunk)
})

rs.on('end', () => {
  console.log(data.toString())
})

fs.writeFile('./easy_way.txt', 'sth', (err) => {
  fs.readFile('./easy_way.txt', (err, data) => {
    console.log(err, data.toString())
  })
})

fs.writeFileSync('./easy_sync', 'sync')
let syncData = fs.readFileSync('./easy_sync')
console.log(1, syncData.toString())





