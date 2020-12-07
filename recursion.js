function getTotalChars(list) {
  if ( list.length <= 1 ) return list[0].length

  return list[0].length + getTotalChars(list.slice(1))
}

function getEvenNumbers(arr) {
  if ( arr.length === 0 ) return []

  if ( arr[0] % 2 === 0 ) {
    return ([arr[0]]).concat(getEvenNumbers(arr.slice(1)))
  } else {
    return getEvenNumbers(arr.slice(1))
  }
}

function getTriangularNumber(n) {
  if ( n == 1 ) return 1

  return n + getTriangularNumber(n - 1)
}

function getIndexOfChar(str, i) {
  if ( str[i] === "x" ) {
    return i;
  } else {
    return getIndexOfChar(str, i + 1)
  }
}

function getNumberOfPaths(rows, columns) {
  if ( rows == 1 || columns == 1 ) return 1

  return getNumberOfPaths(rows - 1, columns) + getNumberOfPaths(rows, columns - 1)
}

function getNthFiboBetter(n, lastlast, last) {
  if (n == 0) {
    return lastlast;
  }

  if (n == 1) {
    return last;
  }

  return getNthFiboBetter(n - 1, last, lastlast + last)
}
