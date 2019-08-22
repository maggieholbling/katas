const urlEncode = function(text) {
  let result = "";
  let counter = 0;
  for (let i = 0; i < text.length; i++) {
    if(text[i] === " ") {
      if (i === 0) {
        counter = i + 1;
      }
      else if (i === text.length - 1) {
        result += text.substring(counter, text.length-1);
      } else {
        result += text.substring(counter, i) + "%20";
        counter = i + 1;
      }
    } else {
      if (i === text.length - 1) {
        result += text.substring(counter, text.length);
      }
    }
  }
  return result;
};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));