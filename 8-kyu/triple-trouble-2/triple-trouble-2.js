function tripleTrouble(one, two, three){
  return [...one]
    .map((char, i) => `${char}${two[i]}${three[i]}`)
    .join('');
 }