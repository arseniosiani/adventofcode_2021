const fs = require('fs')

const file = fs.readFileSync(__dirname + '/input.txt').toString()
const input = file.split('\n')

const count_occurrencies = (input) => {
  const occurencies = [[],[]]
  for (const i of input) {
    const vals = i.split('')
    for (const pos in vals) {
      const val = vals[pos]
      if(!occurencies[val][pos]) occurencies[val][pos] = 0
      occurencies[val][pos]++
    }
  }
  return occurencies
}


const filter = (type , pool, pos, val) => {
  if (pool.length === 1) return pool[0]

  let new_pool = [...pool]
  if (val !== null) {
    new_pool = pool.filter(item => +item[pos] === +val)
  }

  const occurencies = count_occurrencies(new_pool)
  let most_common = null
  if (type == 'o2') {
    most_common = occurencies[0][pos + 1] <= occurencies[1][pos + 1] ? 1 : 0
  } else {
    most_common = occurencies[0][pos + 1] <= occurencies[1][pos + 1] ? 0 : 1
  }
  return filter(type, new_pool, pos+1, most_common)
}

const o2_val = filter('o2', input, -1, null)

const co2_val = filter('co2', input, -1, null)

console.log(o2_val)
console.log(co2_val)

console.log(parseInt(o2_val, 2) * parseInt(co2_val, 2))