let camelCase = function(input) {
  let result = "";
  const array = input.split(" ");
  for (i = 0; i < array.length; i++) {
    if (i > 0) {
      result += array[i][0].toUpperCase();
      result += array[i].slice(1);
    } else {
    result += array[i];
    }
  }
  return result;
};

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));

