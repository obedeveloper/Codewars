function topThreeWords(text) {
  const words = text.toLowerCase().replace(/[^a-z']/g, ' ').split(' ');
  const groups = words.reduce((groups, word) => {
    if (word == '' || word == "'") return groups;
    
    if (!groups[word]) {
      groups[word] = [];
    }
    
    groups[word].push(word);
    return groups;
  }, {});
  const sortedWords = Object
  .entries(groups)
  .map(([key, val]) => [key, val.length])
  .sort((a, b) => b[1] - a[1])
  .map(el => el[0]);
  
  return sortedWords.slice(0, 3);
}