function rgb(r, g, b) {
    return `${getHex(r)}${getHex(g)}${getHex(b)}`
      .toUpperCase();
}
​
function getHex(num) {
  if (num < 0) return '00';
  if (num > 255) return 'ff';
  
  const result = num.toString(16);
  
  if (result.length == 1) {
    return `0${result}`;
  }
  
  return result;
}