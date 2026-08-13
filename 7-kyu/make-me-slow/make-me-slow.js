function makeMeSlow() {
  const now = Date.now();
  while(Date.now() - now < 7e3) {}
}
​