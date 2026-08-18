function longestConsec(strarr, k) {
  const n = strarr.length;
  if (n == 0 || k > n || k <= 0) return ''
  
  let longest = null;
  
  for (let i = 0; i < n; i++) {
    const str = strarr.slice(i, i + k).join('');
    
    if (!longest) {
      longest = str;
      continue;
    }
    
    if (longest.length < str.length) {
      longest = str;
    }
  }
  
  return longest;
}