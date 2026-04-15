function betterThanAverage(classPoints, yourPoints) {
  return (
    classPoints.reduce((sum, score) => sum + score, 0) /
    classPoints.length
  ) < yourPoints;
}
​
​