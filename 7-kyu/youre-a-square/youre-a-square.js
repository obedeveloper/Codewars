function isSquare (n) {
  const integer = Math.floor(Math.sqrt(n));
  const square = integer ** 2;
  
  return n == square;
}