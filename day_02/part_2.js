const fs = require('fs')

const file = fs.readFileSync(__dirname + '/input.txt').toString()
const input = file.split('\n')

let position = 0
let depth = 0
let aim = 0

for (const i of input) {
  const pieces = i.split(' ')
  const direction = pieces[0]
  const value = +(pieces[1]).trim()
  if (direction === 'up') aim -= value
  if (direction === 'down') aim += value

  if (direction === 'forward') {
    position += value
    depth += aim * value
  }
}
console.log(position * depth)