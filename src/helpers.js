export const myParseInt = (str) => {
  if (typeof str === "number") {
    console.log(str);
    return str;
  }

  if (typeof str !== "string") {
    console.log(str);
    return NaN;
  }

  str = str.trim();

  if (str.length < 1) {
    console.log(str, NaN);
    return NaN;
  }

  let sign = str[0] === "-" ? -1 : 1;
  let start = sign > 0 ? 0 : 1;
  let substr = "";

  for (let i = start; i < str.length; i++) {
    if (str[i] !== " " && !Number.isNaN(Number(str[i]))) {
      substr = substr * 10 + Number(str[i]);
    } else {
      break;
    }
  }
  if (substr.length < 1) {
    console.log(str, NaN);
    return NaN;
  }

  console.log(str, substr * sign);
  return substr * sign;
};

// myParseInt(NaN);
// myParseInt(25);
// myParseInt(true);
// myParseInt({});
// myParseInt("0290");
// myParseInt("-123   6");
// myParseInt("few");
// myParseInt("-few12");
// myParseInt("-12dd");
// myParseInt("     34kkk");
// myParseInt("1    0");

const matrix = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
  [17, 18, 19, 20],
];

const matrix2 = [
  [1, 2, 3],
  [5, 6, 7],
  [9, 10, 11],
  [13, 14, 15],
  [17, 18, 19],
];

const matrix3 = [[1, 2, 3]];
const isMatrixCorrect = (matrix) => {
  if (!matrix || matrix.length < 1 || matrix[0].length < 1) return false;
  let rowLength = matrix[0].length;

  for (let row of matrix) {
    if (rowLength !== row.length) {
      console.log(false);
      return false;
    }
  }

  console.log(true);
};

isMatrixCorrect(matrix);

function printMatrixToSpiral(matrix) {
  if (!matrix || matrix.length === 0 || matrix[0].length === 0) {
    return;
  }

  let topRow = 0;
  let bottomRow = matrix.length - 1;
  let leftCol = 0;
  let rightCol = matrix[0].length - 1;

  while (topRow <= bottomRow && leftCol <= rightCol) {
    for (let i = leftCol; i <= rightCol; i++) {
      console.log(matrix[topRow][i]);
    }
    topRow++;

    for (let i = topRow; i <= bottomRow; i++) {
      console.log(matrix[i][rightCol]);
    }
    rightCol--;

    if (leftCol <= rightCol) {
      for (let i = rightCol; i >= leftCol; i--) {
        console.log(matrix[bottomRow][i]);
      }
    }
    bottomRow--;
    if (topRow <= bottomRow) {
      for (let i = bottomRow; i >= topRow; i--) {
        console.log(matrix[i][leftCol]);
      }
    }
    leftCol++;
  }
}

printMatrixToSpiral(matrix2);

const printMatrixToSpiralRec = (
  matrix,
  topRow,
  bottomRow,
  leftCol,
  rightCol
) => {
  if (topRow > bottomRow || leftCol > rightCol) return;

  for (let i = leftCol; i <= rightCol; i++) {
    console.log(matrix[topRow][i]);
  }
  for (let i = topRow + 1; i <= bottomRow; i++) {
    console.log(matrix[i][rightCol]);
  }
  for (let i = rightCol - 1; i >= leftCol && topRow !== bottomRow; i--) {
    console.log(matrix[bottomRow][i]);
  }

  for (let i = bottomRow - 1; i > topRow && leftCol !== rightCol; i--) {
    console.log(matrix[i][leftCol]);
  }
  printMatrixToSpiralRec(
    matrix,
    topRow + 1,
    bottomRow - 1,
    leftCol + 1,
    rightCol - 1
  );
};
console.log("===============================");
printMatrixToSpiralRec(
  matrix2,
  0,
  matrix2.length - 1,
  0,
  matrix2[0].length - 1
);
