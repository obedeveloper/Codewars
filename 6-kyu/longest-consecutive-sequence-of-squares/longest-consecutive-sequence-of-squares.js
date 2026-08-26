function longestSequence(n) {
  const limit = Math.floor(Math.sqrt(n));
  
  for (let i = 1; i <= limit; i++) {
    let sum = 0;
    const sequence = [];
    
    for (let j = i; j <= limit; j++) {
      sum += j ** 2;
      if (sum > n) {break;}
      
      if (sum == n) {
        return [...sequence, j];
      };
      
      sequence.push(j);
    }
  }
  
  return [];
}