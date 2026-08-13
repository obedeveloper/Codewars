function longestConsec(strarr, k) {
  const len = strarr.length;
  
  if (len == 0 || k > len || k <= 0) {
    return '';
  }
  
  const txts = [];
  
  for (let i = 0; i < len; i++) {
    let txt = '';
    
    for (let j = i; j < i + k; j++) {
      txt += strarr[j] ?? '';
    }
    
    txts.push(txt);
  }
  
  return txts.reduce((longest, txt) => {
    if (txt.length > longest.length) {
      return txt;
    }
    
    return longest;
  });
}