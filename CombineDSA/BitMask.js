function findUnique(k, arr) {
  let unique = 0;
  const BITS = 32;            // enough for numbers up to ~2³¹
  for (let i = 0; i < BITS; i++) {
    let bitMask = 1 << i;
    let sum = 0;
    // sum the i-th bit across all numbers
    for (let num of arr) {
      if (num & bitMask) sum++;
    }
    // remainder mod k is 0 if this bit is "full" k times, else it's 1
    if (sum % k !== 0) {
      unique |= bitMask;
    }
  }
  return unique;
}

// Tests
console.log(findUnique(3, [6,2,5,2,2,6,6])); // → 5
console.log(findUnique(4, [2,2,2,10,2]));    // → 10
