function fazerGols(gols) {
  let gol = 0;
  const count = 10;

  for (i = 0; i < count; i++) {
    console.log(gol++);
  }
  return gol;
}

console.log("Fez " + fazerGols(10) + " Gols!!");
