function countLonelyLetters(text) {
  const [aCode, zCode] = ["a", "z"].map((char) => char.charCodeAt());
​
  return [...text.toLowerCase()].reduce((count, char, _, str) => {
    const index = str.indexOf(char);
    const lastIndex = str.lastIndexOf(char);
    const charCode = char.charCodeAt();
​
    if (
      index == lastIndex &&
      aCode <= charCode &&
      zCode >= charCode &&
      (!str.includes(String.fromCharCode(charCode - 1)) || char == 'a') &&
      (!str.includes(String.fromCharCode(charCode + 1)) || char == 'z')
    ) {
      count++;
    }
​
    return count;
  }, 0);
}