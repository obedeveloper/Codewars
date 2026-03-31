function digPow(n, p){
  const digits = [...String(n)];
  const sum = digits.reduce((total, digit, index) => {
    return total + digit ** (p + index);
  }, 0);
  
  return sum % n ? -1 : sum / n;
}
​