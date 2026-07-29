function searchArray(arrayToSearch, query) {
  if (
    arrayToSearch.some((arr) => !Array.isArray(arr)) ||
    arrayToSearch.some((arr) => arr.length != 2) ||
    !Array.isArray(query) ||
    query.length != 2
  ) {
    throw new Error();
  }

  for (let i = 0; i < arrayToSearch.length; i++) {
    const arr = arrayToSearch[i];

    if (arr[0] == query[0] && arr[1] == query[1]) {
      return i;
    }
  }

  return -1;
}
