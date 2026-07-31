function duplicateEncode(word) {
  const lowerWords = [...word].map((w) => w.toLowerCase());

  return lowerWords
    .map((w) => {
      const firstIndex = lowerWords.indexOf(w);
      const lastIndex = lowerWords.lastIndexOf(w);

      return firstIndex == lastIndex ? "(" : ")";
    })
    .join("");
}
