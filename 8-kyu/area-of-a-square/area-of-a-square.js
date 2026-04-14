function squareArea(A){
  const r = (A * 4) / (2 * Math.PI);
  const area = r ** 2;
  return Math.round(area * 100) / 100;
}