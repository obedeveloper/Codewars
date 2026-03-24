function repeatStr (n, s) {
  const strArr = [];
  
  for (let i = 0; i < n; i++) {
    strArr.push(s);
  }
  
  return strArr.join('');
}