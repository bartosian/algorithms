function isPrime(n) {
  if (n <= 1) return false;

  const loopCounter = Math.sqrt(n);

  for (let i = 2; i <= loopCounter; i++) {
    if (n % i === 0) return false;
  }

  return true

}
