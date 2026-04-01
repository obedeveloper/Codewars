function moveZeros(arr) {
  const result = [];
  let zeros = [];
  
  for (let el of arr) {
    if (el === 0) {
      zeros.push(0);
    } else {
      result.push(el);
    }
  }
  
  return [...result, ...zeros];
}