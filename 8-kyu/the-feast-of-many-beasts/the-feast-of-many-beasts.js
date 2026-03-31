function feast(beast, dish) {
  return dish.at(0) == beast.at(0) && dish.at(-1) == beast.at(-1);
}