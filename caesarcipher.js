const isUpperCase = (str) => {
  return str === str.toUpperCase();
};

const hasPunctuation = (str) => {
  const regex = /[-!$%^&*()_+|~=`{}\[\]:";'<>?,.\/ ]/;
  return str.match(regex) !== null;
};

const cc = (str, key) => {
  let result = ``;

  for (let i = 0; i < str.length; i++) {
    if (hasPunctuation(str[i])) {
      result += str[i];
    } else if (isUpperCase(str[i])) {
      result += String.fromCharCode(((str.charCodeAt(i) + key - 65) % 26) + 65);
    } else {
      result += String.fromCharCode(((str.charCodeAt(i) + key - 97) % 26) + 97);
    }
  }

  return result;
};

module.exports = cc;
