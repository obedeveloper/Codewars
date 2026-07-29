function pascalsTriangle(n) {
  const result = [];

  for (let i = 0; i < n; i++) {
    const prev = ((i - 1) * i) / 2;
    result.push(1);
    for (let j = 1; j < i; j++) {
      result.push(result[prev + j - 1] + result[prev + j]);
    }
    if (i > 0) result.push(1);
  }

  return result;
}
