const capitalize = (string) => {
  const first = string[0].toUpperCase();
  const rest = string.slice(1, string.length).toLowerCase();
  return first + rest;
};

module.exports = capitalize;
