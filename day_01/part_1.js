const fs = require('fs')

const file = fs.readFileSync(__dirname + '/input.txt').toString()
const input = file.split('\n')

let n = 0
let last = input[0]
for (const i of input) {
  if (last < +i) {
    n++
  }
  last = i
}
console.log(n)