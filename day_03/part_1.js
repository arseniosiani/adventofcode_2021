const fs = require('fs')

const file = fs.readFileSync(__dirname + '/input.txt').toString()
const input = file.split('\n')

const occurencies = [[],[]]

for (const i of input) {
  const vals = i.split('')
  for (const pos in vals) {
    const val = vals[pos]
    if(!occurencies[val][pos]) occurencies[val][pos] = 0
    occurencies[val][pos]++
  }
}
let gamma = ''
let epsilon = ''
for (let i = 0; i < occurencies[0].length; i++) {
  if (occurencies[0][i] > occurencies[1][i]) {
    gamma += '1'
    epsilon += '0'
  } else {
    gamma += '0'
    epsilon += '1'
  }
}

console.log(parseInt(gamma, 2) * parseInt(epsilon, 2))
