// Roman Numerals Decoder
// https://www.codewars.com/kata/51b6249c4612257ac0000005/train/javascript

// Create a function that takes a Roman numeral as its argument and returns its value as a numeric decimal integer. You don't need to validate the form of the Roman numeral.

function romanDecoder(roman) {
  let romanObj = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let arr = roman.split("");
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (romanObj[arr[i]] < romanObj[arr[i + 1]]) {
      sum += romanObj[arr[i + 1]] - romanObj[arr[i]];
      i++;
    } else {
      sum += romanObj[arr[i]];
    }
  }
  return sum;
}

// console.log(romanDecoder("XXI")); // 21

// Roman numerals encoder
// https://www.codewars.com/kata/51b62bf6a9c58071c600001b/train/javascript
// Create a function taking a positive integer as its parameter and returning a string containing the Roman Numeral representation of that integer.

function romanEncoder(number) {
  let romanObj = {
    1: "I",
    4: "IV",
    5: "V",
    9: "IX",
    10: "X",
    40: "XL",
    50: "L",
    90: "XC",
    100: "C",
    400: "CD",
    500: "D",
    900: "CM",
    1000: "M",
  };
  let arr = [];
  let keys = Object.keys(romanObj);
  for (let i = keys.length - 1; i >= 0; i--) {
    while (number >= keys[i]) {
      arr.push(romanObj[keys[i]]);
      number -= keys[i];
    }
  }
  return arr.join("");
}
