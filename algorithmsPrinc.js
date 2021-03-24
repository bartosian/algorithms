// euclids algorithm
function greatestCommonDivisor(p, q) {
  if (q === 0) return p;

  let rem = p % q;

  return greatestCommonDivisor(q, r);
}
