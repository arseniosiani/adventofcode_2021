const fs = require('fs')

const file = fs.readFileSync(__dirname + '/input.txt').toString()
const input = file.split('\n')

const trine = []

for (let i in input) {
  i = +i
  const val = (+input[i]) + (+input[i + 1] || 0) + (+input[i + 2] || 0)
  trine.push(val)
}

let n = 0
let last = trine[0]
for (const i of trine) {
  if (last < +i) {
    n++
  }
  last = i
}
 console.log(n)