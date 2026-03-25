function accum(s) {
  return s.split('').reduce((accum, char, index) => {
    const temp = [char.toUpperCase()];
    
    for (let pos = 0; pos < index; pos++) {
      temp.push(char.toLowerCase());
    }
      
    accum.push(temp.join(''))
    return accum;
  }, []).join('-');
}