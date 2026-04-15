function fiveLine(s){
  let newStr = '';
  
  for (let i = 0; i < 5; i++) {
    newStr += s.trim().repeat(i + 1);
    if (i < 4) newStr += '\n';
  }
  
  return newStr;
}