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
