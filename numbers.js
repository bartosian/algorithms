function isPrime(n) {
  if (n <= 1) return false;

  const loopCounter = Math.sqrt(n);

  for (let i = 2; i <= loopCounter; i++) {
    if (n % i === 0) return false;
  }

  return true

}

function getNumbers(arr, weight) {
  let sumMap = {},
      arrLength = arr.length;

  for (var i = 0; i < arrLength; i++) {
    sumMap[arr[i]] = i
  }

  for (var i = 0; i < arrLength; i++) {
    let elIndex = sumMap[weight - arr[i]];
    console.log(elIndex);
    if (elIndex) return [i, elIndex];
  }

  return -1;
}
