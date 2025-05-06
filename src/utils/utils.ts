const items = new Array(25_999_999).fill(9).map((_, index) => {
  return {
    value: index,
    filtered: index === 25_999_998,
  };
});

export { items };
