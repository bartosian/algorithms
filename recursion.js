function getTotalChars(list) {
  if ( list.length <= 1 ) return list[0].length

  return list[0].length + getTotalChars(list.slice(1))
}
