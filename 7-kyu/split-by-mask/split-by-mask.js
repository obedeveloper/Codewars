function split(string,mask) {
  const strLen = string.length;
  const sum = mask.reduce((s, n) => s + n, 0);
  
  if (strLen != sum) return null;
  
  const str = [...string];
  const newStr = [];
  
  for (const n of mask) {
    newStr.push(str.splice(0, n));
  }
  
  return newStr.map(arr => arr.join(''));
}