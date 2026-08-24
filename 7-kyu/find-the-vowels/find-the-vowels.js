function vowelIndices(word) {
  const vowels = [...'aeiouy'];
  const vowelsIndex = [];
  
  [...word].forEach((c, i) => {
    if (!vowels.includes(c.toLowerCase())) {
        return;
    }
    
    vowelsIndex.push(i + 1);
  });
  
  return vowelsIndex;
}