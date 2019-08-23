const multiplicationTable = function(number) {
  for (let i = 1; i <= number; i++) {
    let result = "";
    for (let k = 1; k <= number; k++) {
      result += i * k;
      if (k !== number) {
        result += ' ';
      }
    }
    if (i !== number) {
      console.log(result + '\n');
    } else {
      console.log(result);
    }
  }
};

multiplicationTable(10);