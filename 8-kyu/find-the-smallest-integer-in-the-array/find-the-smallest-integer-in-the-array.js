function findSmallestInt(arr) {
  const smallest = arr.reduce((small, value) => {
    if (small === undefined || value < small) {
      return value
    }
    
    return small;
  })
  
  return smallest;
}