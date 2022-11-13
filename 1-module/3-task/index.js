function ucFirst(str) {// str === '0' || str === ''
  if (!str) return str;
  return str[0].toUpperCase() + str.slice(1);
}
