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

const chechBingo = (boards) => {
  for (const b of boards) {
    for (let r = 0; r < 5; r++) {
      const row_sum = b[r].reduce((a, b) => a + b, 0);
      if (row_sum === 0) {
        return b;
      }
      let col_sum = 0;
      for (let c = 0; c < 5; c++) {
        col_sum += b[c][r];
      }

      if (col_sum === 0) {
        return b;
      }
    }
  }
  return false;
};

for (const num of nums) {
  console.log("extract " + num);
  boards = extract(num, boards);
  const win_board = chechBingo(boards);
  if (win_board) {
    console.log("WE HAVE A WINNER!!");
    console.log(win_board);
    const sum = sumBoard(win_board);
    console.log(sum * num);
    process.exit();
  }
}
