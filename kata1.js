const sumLargestNumbers = function(data) {
  let max;
  let count = 0;
  let max2;
  for (let i = 0; i < data.length; i++) {
    if (!(max)) {
      max = data[i];
      count = i; // keep track of the index of max for max 2
    } else {
      if (data[i] > max) {
        max = data[i];
        count = i;
      }
    }
  }

  for (let i = 0; i < data.length; i++) {
    if (!(max2) && i !== count) {
        max2 = data [i];
    } else {
      if (data[i] > max2 && i !== count) {
        max2 = data[i];
      }
    }
  }
  return max + max2;
};

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));