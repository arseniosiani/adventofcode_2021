const fs = require("fs");

const file = fs.readFileSync(__dirname + "/input.txt").toString();
const lines = file.split("\n");

const radar = {};

const placeLine = (a1, b1, a2, b2) => {
  const x1 = a1 < a2 ? a1 : a2;
  const x2 = a1 < a2 ? a2 : a1;

  const y1 = b1 < b2 ? b1 : b2;
  const y2 = b1 < b2 ? b2 : b1;

  for (let x = x1; x <= x2; x++) {
    if (!radar[x]) radar[x] = {};
    for (let y = y1; y <= y2; y++) {
      if (!radar[x][y]) radar[x][y] = 0;
      radar[x][y]++;
    }
  }
};

const countRedPoints = () => {
  let count = 0;
  for (const x in radar) {
    for (const y in radar[x]) {
      if (radar[x][y] > 1) count++;
    }
  }
  return count;
};

for (const line of lines) {
  const pieces = line.split("->").map((i) => i.trim());
  const s = pieces[0].split(",").map((i) => +i);
  const e = pieces[1].split(",").map((i) => +i);
  placeLine(s[0], s[1], e[0], e[1]);
}

console.log(countRedPoints());
