function berlinClock(time) {
  const [hh, mm, ss] = time.split(":").map((t) => +t);
  const result = [[ss % 2 ? "O" : "Y"], [], [], [], []];

  for (let i = 0; i < 4; i++) {
    result[1].push(i < Math.floor(hh / 5) ? "R" : "O");
  }

  for (let j = 0; j < 4; j++) {
    result[2].push(j < hh % 5 ? "R" : "O");
  }

  for (let k = 0; k < 11; k++) {
    result[3].push(
      k < Math.floor(mm / 5) ? ([2, 5, 8].includes(k) ? "R" : "Y") : "O",
    );
  }

  for (let m = 0; m < 4; m++) {
    result[4].push(m < mm % 5 ? "Y" : "O");
  }

  return result.map((a) => a.join("")).join("\n");
}

console.log(berlinClock("12:56:01"));
console.log(berlinClock("22:32:45"));
