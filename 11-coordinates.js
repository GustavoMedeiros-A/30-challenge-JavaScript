function smallerPaires([x, y]) {
  const result = [];
  for (let i = 0; i <= x; i++) {
    for (let j = 0; j <= y; j++) {
      result.push([i, j]);
    }
  }
  return result
}

console.log(smallerPaires([2, 2]));
console.log(smallerPaires([2, 7]));
console.log(smallerPaires([-3, -3]));
console.log(smallerPaires([7, 6]));
