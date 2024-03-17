function removeEveryOther(arr) {
  return arr.filter((_, index) => (index + 1) % 2 !== 0);
}
