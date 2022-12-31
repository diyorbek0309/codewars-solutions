// Numbers that are a power of their sum of digits
// The number 81 has a special property, a certain power of the sum of its digits is equal to 81 (nine squared). Eighty one (81), is the first number in having this property (not considering numbers of one digit). The next one, is 512. Let's see both cases with the details.
// We need to make a function that receives a number as argument n and returns the n-th term of this sequence of numbers.
// 1 --> 81
// 2 --> 512

function powerSumDigTerm(n) {
  let arr = [];
  for (let i = 2; i < 10000; i++) {
    for (let j = 2; j < 1000; j++) {
      let sum = i
        .toString()
        .split("")
        .reduce((a, b) => +a + +b);
      if (i === Math.pow(sum, j)) {
        arr.push(i);
      }
    }
  }
  return arr.sort((a, b) => a - b)[n - 1];
}

// console.log(powerSumDigTerm(1)); // 81

// ---------------------------------------------------------------------------------------------------------------

// The Hashtag Generator
// Here's the deal:
// It must start with a hashtag (#).
// All words must have their first letter capitalized.
// If the final result is longer than 140 chars it must return false.
// If the input or the result is an empty string it must return false.
// https://www.codewars.com/kata/52449b062fb80683ec000024

function generatingHashtag(str) {
  if (str.length === 0) {
    return false;
  }
  let arr = str.split(" ");
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(arr[i].charAt(0).toUpperCase() + arr[i].slice(1));
  }
  let newStr = newArr.join("");
  if (newStr.length > 140) {
    return false;
  }
  return "#" + newStr;
}

// ---------------------------------------------------------------------------------------------------------------

// Human Readable Time
// Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)
// HH = hours, padded to 2 digits, range: 00 - 99
// MM = minutes, padded to 2 digits, range: 00 - 59
// SS = seconds, padded to 2 digits, range: 00 - 59
// The maximum time never exceeds 359999 (99:59:59)
// https://www.codewars.com/kata/52685f7382004e774f0001f7

function humanReadable(seconds) {
  if (seconds < 0 || seconds > 360000) {
    return null;
  }

  let hours = Math.floor(seconds / 3600);
  seconds -= hours * 3600;

  if (hours < 10) hours = "0" + hours;

  let minutes = Math.floor(seconds / 60);
  seconds -= minutes * 60;

  if (minutes < 10) minutes = "0" + minutes;

  if (seconds < 10) seconds = "0" + seconds;

  return hours + ":" + minutes + ":" + seconds;
}

// -------------------------------------------------------------------------------------------------
