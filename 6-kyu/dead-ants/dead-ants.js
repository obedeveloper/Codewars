deadAntCount = function(ants) {
  if (!ants) return 0;
  const str = ants.replaceAll('ant', '');
  
  const heads = str.split('a').length;
  const bodies = str.split('n').length;
  const tails = str.split('t').length;
  
  return Math.max(heads, bodies, tails)  - 1;
}