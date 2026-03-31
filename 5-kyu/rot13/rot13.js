function rot13(str) {
  const chars = new Map(
    Array.from({length:26}).map((_, index) => {
      const pos = index < 13 ? index + 65 : index + 97 - 13;
      return [
        String.fromCharCode(pos), 
        String.fromCharCode(pos + 13)
      ];
    })
  );
  
  const keys = [...chars.keys()];
  const values = [...chars.values()];
​
  return [...str].map(char => {
    if (keys.includes(char)) {
      return values.at(keys.indexOf(char));
    }
    
    if (values.includes(char)) {
      return keys.at(values.indexOf(char))
    }
    
    return char;
  }).join('');
}
​