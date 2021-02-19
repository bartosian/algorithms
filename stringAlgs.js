function reverseStr(str) {
  let newStr = "";

  for (let i = str.length - 1; i >= 0; i--) {
    newStr += str[i];
  }

  return newStr;
}

function suffixes(str) {
  let len = str.length,
      suffixes = [];

  for (let i = 0; i < len; i++) {
    suffixes.push(str.substring(i));
  }

  return suffixes;
}
