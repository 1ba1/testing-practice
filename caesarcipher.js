const cc = (str, key) => {
  let result = ``;
  for (let i = 0; i < str.length; i++ ){
    result+= String.fromCharCode(str.charCodeAt(i)+key%26);
  }
  return result;
};

module.exports = cc;