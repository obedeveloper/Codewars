function ipsBetween(start, end){
  const first = start.split('.').reverse();
  const second = end.split('.').reverse();
  
  return second.reduce((ips, curr, index) => {
    return ips + (curr - first[index]) * 256 ** index;
  }, 0);
}