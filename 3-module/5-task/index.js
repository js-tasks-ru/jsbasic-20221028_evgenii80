function getMinMax(str) {
  let numArr = str
    .split(" ")
    .map( (a) => +a)
    .filter( (a) => Number.isFinite(a));

  return {
    min: Math.min(...numArr),
    max: Math.max(...numArr),
  };
}
