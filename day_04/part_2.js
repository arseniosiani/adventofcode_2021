const fs = require("fs");

const file = fs.readFileSync(__dirname + "/input.txt").toString();
const pieces = file.split("\n\n");
const nums = pieces.shift().split(",");

let boards = pieces.map((b) =>
  b.split("\n").map((r) =>
    r
      .trim()
      .split(/ +/)
      .map((i) => +i)
  )
);

const extract = (num, boards) => {
  for (const b in boards) {
    for (const r in boards[b]) {
      for (const c in boards[b][r]) {
        if (boards[b][r][c] === +num) {
          boards[b][r][c] = 0;
        }
      }
    }
  }
  return boards;
};

const sumBoard = (board) => {
  let sum = 0;
  for (const r in board) {
    for (const c in board[r]) {
      sum += board[r][c];
    }
  }
  return sum;
};

const chechBingo = (board) => {
  for (let r = 0; r < 5; r++) {
    const row_sum = board[r].reduce((a, b) => a + b, 0);
    if (row_sum === 0) {
      return true;
    }
    let col_sum = 0;
    for (let c = 0; c < 5; c++) {
      col_sum += board[c][r];
    }

    if (col_sum === 0) {
      return true;
    }
  }

  return false;
};

let last_board = null;
let last_num = null;
for (const num of nums) {
  console.log("extract " + num);
  boards = extract(num, boards);

  for (const b in boards) {
    const is_win = chechBingo(boards[b]);
    if (is_win) {
      console.log("WE HAVE A WINNER!!");
      last_board = boards[b];
      boards.splice(b, 1);
      last_num = num;
    }
  }
}

console.log(last_board);
const sum = sumBoard(last_board);
console.log(sum * last_num);
