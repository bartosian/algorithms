function medianOfArray(arr) {
  var length = arr.length;

  if (length % 2 == 1) {
    return arr[Math.floor(length / 2)]
  } else {
    return (arr[length / 2] + arr[length / 2 - 1]) / 2
  }
}

var M = [
  [1,  2,  3,   4,  5],
  [6,  7,  8,   9, 10],
  [11, 12, 13, 14, 15],
  [16, 17, 18, 19, 20]
];

function spiralPrint(M) {
  var topRow = 0,
      leftCol = 0,
      btmRow = M.length - 1,
      rightCol = M[0].length - 1;

  while (topRow < btmRow && leftCol < rightCol) {
    for (var col)
  }
}
