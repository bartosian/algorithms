function checkIfAllUnique(str) {
  if (str.length > 256) return false;

  let chars = new Array(256).fill(false);

  for (let i = 0; i < str.length; i++) {
    let char = str.charCodeAt(i);
    if (!chars[char]) {
      chars[char] = true;
    } else {
      return false;
    }
  }

  return true;
}

function checkIfAllUniqueWithoutSpace(str) {
  let sortedStr = str.split("").sort().join("");

  for (let i = 1; i < str.length; i++) {
    if (sortedStr[i] === sortedStr[i - 1]) {
      return false;
    }
  }

  return true;
}

function isPermutation(str1, str2) {
  let len1 = str1.lengthj,
      len2 = str2.length;

  if (len1 !== len2) return false;

  return len1.sort() !== len2.sort();
}

function isPermutationSec(str1, str2) {
  let len1 = str1.lengthj,
      len2 = str2.length;

  if (len1 !== len2) return false;

  let charSet = new Array(256).fill(0);

  for (let i = 0; i < len1; i++) {
    charSet[str1.charCodeAt(i)]++;
  }

  for (let j = 0; i < len1; j++) {
    charSet[str2.charCodeAt(j)]--;

    if (charSet[str2.charCodeAt(j)] < 0) {
      return false;
    }
  }

  return true;

}

function urlify(str, len) {
  return str.trim().split(" ").join("%20");
}

console.log(urlify("Mr John Smith      "));
