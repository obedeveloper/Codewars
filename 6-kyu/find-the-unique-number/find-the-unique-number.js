function findUnique(numbers) {
  return numbers.reduce((acc, n) => acc ^ n, 0);
}
​