function factorial(n) {
  let result = 1;
  let i = 1;

  do {
    result = result * i;
    i++;
  }
  while (i <= n);

  return result;
}
