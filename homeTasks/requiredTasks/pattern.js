function printRow(n) {
  let row = '';
  for (let i = 0, p = n; i < n; p = p + 4 - i, i++) {
    row += p + ' ';
  }
  return row;
}

function printPattern() {
  for (let j = 1; j <= 5; j++) {
    console.log(printRow(j));
  }
}

printPattern();
