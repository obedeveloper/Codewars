function number (busStops){
  return busStops.reduce((peoples, busStop) => {
    return peoples += busStop[0] - busStop[1];
  }, 0)
}