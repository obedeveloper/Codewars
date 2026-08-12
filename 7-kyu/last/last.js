function last() {
  if (arguments.length != 1) {
    return [...arguments].at(-1);
  }
  
  try {
    return arguments[0].at(-1);
  } catch {
    return arguments[0];
  }
}