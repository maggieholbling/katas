const repeatNumbers = function(data) {
  let result = "";
  for (let i = 0; i < data.length; i++) {//loop through arrays
    for (let k = 0; k < data[i][1]; k++) {
      result += data[i][0]//repeat 1st number 2nd number of times
    }
    if (i < data.length - 1) {
      result += ", "
    }
  }
  return result;
};

console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));