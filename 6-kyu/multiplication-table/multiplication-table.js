function multiplicationTable(size) {
  return Array
    .from({length: size}, (_, i) => {
      return Array.from({length: size}, (_, j) => (j + 1) * (i + 1))
    });
}
​