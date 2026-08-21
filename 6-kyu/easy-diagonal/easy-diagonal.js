function diagonal(n, p) {
  let sum = 0;
  const fact = n => n <= 1 ? 1 : n * fact(n -1);
  const binomial = (n, p) => fact(n) / (fact(p) * fact(n - p));
  
  for (let i = 0; i <= n - p; i++) {
    sum += binomial(i + p, p);
  }
  
  return sum;
}