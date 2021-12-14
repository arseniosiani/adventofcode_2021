const fs = require('fs')

const file = fs.readFileSync(__dirname + '/input.txt').toString()
const input = file.split('\n')

let position = 0
let depth = 0

for (const i of input) {
  const pieces = i.split(' ')
  const direction = pieces[0]
  const value = +(pieces[1]).trim()
  if (direction === 'forward') position += value
  if (direction === 'up') depth -= value
  if(direction === 'down') depth+= value
}
console.log(position * depth)