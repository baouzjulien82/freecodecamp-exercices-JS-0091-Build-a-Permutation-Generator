function permuteString(string, prefix, array) {
  prefix = "";
  array = [];
  if(!string.length) {
    array.push(prefix);
    return array;
  } else {
    array =  Array.from(string).forEach((char) => {
      array.splice(char, 1);
      const stringIn = array.join("");
      permuteString(stringIn ,char, array)
    })
  }
  return [...new Set(array)];
}
