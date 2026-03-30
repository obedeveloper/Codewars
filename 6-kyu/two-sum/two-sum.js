function twoSum(numbers, target) {
  const {length} = numbers;
  
  for (let x = 0; x < length; x++) {
    for (let y = 0; y < length; y++) {
      if (
        numbers[x] + numbers[y] == target &&
        x !== y
      ) {
        return [x,y];
      }
    }
  }
}
​