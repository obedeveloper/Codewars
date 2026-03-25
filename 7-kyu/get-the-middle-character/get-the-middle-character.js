function getMiddle(s) {
  const {length} = s;
  const middle = Math.floor(length / 2);
  
  if (length % 2) {
    return s.at(middle)
  }
  
  return s.at(middle - 1) + s.at(middle)
}