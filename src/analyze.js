const analyze = (arr) => {
  return {
    average: arr.reduce((value, acc) => value + acc, 0) / arr.length,
    min: Math.min(...arr),
    max: Math.max(...arr),
    length: arr.length,
  };
};

module.exports = analyze;
