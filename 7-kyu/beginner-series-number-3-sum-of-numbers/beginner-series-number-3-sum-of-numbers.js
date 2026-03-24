function getSum(a, b) {
  let sum = 0;
  let [min, max] = [Math.min(a,b), Math.max(a,b)];
  
  while(min <= max) {
    sum += min++;
  }
  
  return sum;
}