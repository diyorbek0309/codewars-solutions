// Snail
// Given an n x n array, return the array elements arranged from outermost elements
// to the middle element, traveling clockwise.
// https://www.codewars.com/kata/521c2db8ddc89b9b7a0000c1/train/javascript

const snail = function (array) {
  let finalArray = [];

  while (array.length) {
    finalArray.push(...array.shift());
    array.map((row) => finalArray.push(row.pop()));
    array.reverse().map((row) => row.reverse());
  }
  return finalArray;
};

// ----------------------------------------------------------------------------------------

// Human readable duration format
// Your task in order to complete this Kata is to write a function which formats a duration, given as a number of seconds, in a human-friendly way.
// The function must accept a non-negative integer. If it is zero, it just returns "now". Otherwise, the duration is expressed as a combination of years, days, hours, minutes and seconds.
// https://www.codewars.com/kata/52742f58faf5485cae000b9a

function formatDuration(seconds) {
  let time = { year: 31536000, day: 86400, hour: 3600, minute: 60, second: 1 },
    res = [];

  if (seconds === 0) return "now";

  for (let key in time) {
    if (seconds >= time[key]) {
      let val = Math.floor(seconds / time[key]);
      res.push((val += val > 1 ? " " + key + "s" : " " + key));
      seconds = seconds % time[key];
    }
  }

  return res.length > 1
    ? res.join(", ").replace(/,([^,]*)$/, " and" + "$1")
    : res[0];
}

// ------------------------------------------------------------------------------------

// Range Extraction
// A format for expressing an ordered list of integers is to use a comma separated list of either
// individual integers
// or a range of integers denoted by the starting integer separated from the end integer in the range by a dash, '-'.
// The range includes all integers in the interval including both endpoints. It is not considered a range unless it spans at least 3 numbers. For example "12,13,15-17"
// Complete the solution so that it takes a list of integers in increasing order and returns a correctly formatted string in the range format.
// https://www.codewars.com/kata/51ba717bb08c1cd60f00002f

function solution(list) {
  const result = [];
  let str = [];
  for (let i = 0; i < list.length; i++) {
    if (list[i + 1] === list[i] + 1) {
      str.push(list[i]);
    } else {
      if (str.length < 2) {
        result.push(...str, list[i]);
      } else {
        result.push(str[0] + "-" + list[i]);
      }
      str = [];
    }
  }
  return result.join();
}

// ----------------------------------------------------------------------------------------------

// Next bigger number with the same digits
// Create a function that takes a positive integer and returns the next bigger number that
// can be formed by rearranging its digits. For example:
// 12 ==> 21
// 513 ==> 531
// 2017 ==> 2071
// https://www.codewars.com/kata/55983863da40caa2c900004e

function overlayArray(trailing, digits, p) {
  for (let [i, n] of trailing.entries()) {
    digits[p + i] = n;
  }
  return b;
}

function swapItems(arr, i1, i2) {
  const [a, b] = [arr[i1], arr[i2]];
  arr[i1] = b;
  arr[i2] = a;
}

function nextBigger(n) {
  let digits = n.toString().split("");

  for_each_digit: for (let i = digits.length - 1; i >= 0; --i) {
    let d = digits[i];

    for_each_trailing_digit: for (let j = digits.length - 1; j > i; --j) {
      if (d < digits[j]) {
        swapItems(digits, i, j);
        let trailing = digits.slice(i + 1, digits.length);
        trailing.sort();
        overlayArray(trailing, digits, i + 1);
        break for_each_digit;
      }
    }
  }

  let answer = +digits.join("");

  return n == answer ? -1 : answer;
}

// -----------------------------------------------------------------------------------------

// Strip Comments
// Complete the solution so that it strips all text that follows any of a set of comment
// markers passed in. Any whitespace at the end of the line should also be stripped out.
// https://www.codewars.com/kata/51c8e37cee245da6b40000bd

function solution(input, markers) {
  let comments = input.split("\n");
  for (let i in markers) {
    for (let j in comments) {
      let index = comments[j].indexOf(markers[i]);
      if (index >= 0) {
        comments[j] = comments[j].substring(0, index).trim();
      }
    }
  }
  return comments.join("\n");
}

// -------------------------------------------------------------------------------------------

// Permutations
// In this kata you have to create all permutations of a non empty input
// string and remove duplicates, if present.
// This means, you have to shuffle all letters from the input in all possible orders.
// https://www.codewars.com/kata/5254ca2719453dcc0b00027d

function permutations(string) {
  let hash = {},
    resArr = [];

  const subroutine = (testStr, newString) => {
    newString = newString || "";
    if (newString.length === string.length) {
      hash[newString] = true;
      return;
    }
    for (let i = 0; i < testStr.length; i++) {
      let cur = testStr[i];
      let str = newString + cur;
      let excision = testStr.substring(0, i) + testStr.substring(i + 1);
      subroutine(excision, str);
    }
  };

  subroutine(string);
  for (let key in hash) {
    resArr.push(key);
  }
  return resArr;
}

// -----------------------------------------------------------------------------------

// Sum of Intervals
// Write a function called sumIntervals/sum_intervals() that accepts an array of intervals,
// and returns the sum of all the interval lengths. Overlapping intervals should only be counted once.
// Intervals are represented by a pair of integers in the form of an array.
// The first value of the interval will always be less than the second value.
// Interval example: [1, 5] is an interval from 1 to 5. The length of this interval is 4.
// https://www.codewars.com/kata/52b7ed099cdc285c300001cd

function sumIntervals(intervals) {
  intervals = intervals.sort(function (a, b) {
    return a[0] - b[0];
  });
  intervals = intervals.reduce(function (acc, el, index, array) {
    const anterior = array[index - 1];
    if (array.length > 1 && anterior !== undefined) {
      if (el[0] < acc[acc.length - 1]) {
        if (el[1] >= acc[acc.length - 1]) {
          acc[acc.length - 1] = el[1];
        }
      } else {
        acc.push(...el);
      }
    } else {
      acc.push(...el);
    }
    return acc;
  }, []);
  let result = 0;
  for (let i = 0; i < intervals.length - 1; i += 2) {
    result += intervals[i + 1] - intervals[i];
  }
  return result;
}

// ---------------------------------------------------------------------------------------

// Sum Strings as Numbers
// Given the string representations of two integers,
// return the string representation of the sum of those integers.
// https://www.codewars.com/kata/5324945e2ece5e1f32000370

function sumStrings(a, b) {
  return a >= 9007199254740992 - 1 || b >= 9007199254740992 - 1
    ? bigInt(a, b)
    : a * 1 + b * 1 + "";
}

function bigInt(a, b) {
  let c = "",
    d = 0;
  let zero = new Array(Math.abs(a.length - b.length) + 1).join("0");

  a.length >= b.length ? (b = zero + b) : (a = zero + a);

  for (let i = b.length - 1; i >= 0; i--) {
    let sum = a[i] * 1 + b[i] * 1 + d;
    if (sum >= 10) {
      sum = sum - 10;
      d = 1;
    } else {
      d = 0;
    }
    c = sum + c;
  }

  return d > 0 ? d + c : c;
}

// -------------------------------------------------------------------------------------

// Strings Mix
// Given two strings s1 and s2, we want to visualize how different the two strings are. We will only take into account the lowercase letters (a to z).
// First let us count the frequency of each lowercase letters in s1 and s2.
// So the maximum for 'a' in s1 and s2 is 4 from s1; the maximum for 'b' is 3 from s2. In the following we
// will not consider letters when the maximum of their occurrences is less than or equal to 1.
// We can resume the differences between s1 and s2 in the following string: "1:aaaa/2:bbb"
// where 1 in 1:aaaa stands for string s1 and aaaa because the maximum for a is 4. In the same manner 2:bbb stands for string s2 and bbb because the maximum for b is 3.
// The task is to produce a string in which each lowercase letters of s1 or s2 appears as many times as its
// maximum if this maximum is strictly greater than 1; these letters will be prefixed by the number
// of the string where they appear with their maximum value and :. If the maximum is in s1 as well as in s2 the prefix is =:.
// https://www.codewars.com/kata/5629db57620258aa9d000014

// ------------------------------------------------------------------------------------------

// Twice linear
// Consider a sequence u where u is defined as follows:
// 1. The number u(0) = 1 is the first one in u.
// 2. For each x in u, then y = 2 * x + 1 and z = 3 * x + 1 must be in u too.
// 3. There are no other numbers in u.
// Ex: u = [1, 3, 4, 7, 9, 10, 13, 15, 19, 21, 22, 27, ...]
// 1 gives 3 and 4, then 3 gives 7 and 10, 4 gives 9 and 13, then 7 gives 15 and 22 and so on...
// https://www.codewars.com/kata/5672682212c8ecf83e000050

function dblLinear(n) {
  let u = [1],
    pt2 = 0,
    pt3 = 0;

  for (let i = 1; i <= n; i++) {
    u[i] = Math.min(2 * u[pt2] + 1, 3 * u[pt3] + 1);
    if (u[i] == 2 * u[pt2] + 1) pt2++;
    if (u[i] == 3 * u[pt3] + 1) pt3++;
  }

  return u[n];
}

// -------------------------------------------------------------------------------------------

// Decode the Morse code, advanced
// When transmitting the Morse code, the international standard specifies that:
// "Dot" – is 1 time unit long.
// "Dash" – is 3 time units long.
// Pause between dots and dashes in a character – is 1 time unit long.
// Pause between characters inside a word – is 3 time units long.
// Pause between words – is 7 time units long.
// However, the standard does not specify how long that "time unit" is. And in fact different operators would transmit at different speed. An amateur person may need a few seconds to transmit a single character, a skilled professional can transmit 60 words per minute, and robotic transmitters may go way faster.
// For this kata we assume the message receiving is performed automatically by the hardware that checks the line periodically, and if the line is connected (the key at the remote station is down), 1 is recorded, and if the line is not connected (remote key is up), 0 is recorded. After the message is fully received, it gets to you for decoding as a string containing only symbols 0 and 1.
// For example, the message HEY JUDE, that is ···· · −·−−   ·−−− ··− −·· · may be received as follows:
// 1100110011001100000011000000111111001100111111001111110000000000000011001111110011111100111111000000110011001111110000001111110011001100000011
// As you may see, this transmission is perfectly accurate according to the standard, and the hardware sampled the line exactly two times per "dot".

var decodeBits = function (bits) {
  bits = trim(bits, "0");

  const bitsSeq = countDuplicateSequence(bits);
  const duration = getTimeUnits(bitsSeq);
  const charTypeSeparator = "0".repeat(duration.charType);
  const charSeparator = "0".repeat(duration.char);
  const wordSeparator = "0".repeat(duration.word);
  const morseBitsMap = {
    ["1".repeat(duration.dot)]: ".",
    ["1".repeat(duration.dash)]: "-",
  };
  const toMorse = (char) => morseBitsMap[char];
  const getCharsType = (chars) =>
    chars.split(charTypeSeparator).map(toMorse).join("");
  const getChars = (words) =>
    words.split(charSeparator).map(getCharsType).join(" ");
  const getWords = bits.split(wordSeparator).map(getChars);
  const morse = getWords.join(" ".repeat(3));

  return morse;
};

var decodeMorse = function (morseCode) {
  const wordsMap = morseCode
    .split(" ".repeat(3))
    .map((words) => words.split(" "));
  const decodeChars = (char) => MORSE_CODE[char];
  const decodeWords = (words) => words.map(decodeChars).join("");
  const decodedString = wordsMap.map(decodeWords).join(" ").trim();

  return decodedString;
};

function getTimeUnits(bitsSec) {
  bitsSec[0] = bitsSec[0] || [];
  bitsSec[1] = bitsSec[1] || [];

  const duration = { dot: 1, dash: 3, charType: 1, char: 3, word: 7 };
  const minGap = Math.min.apply(null, bitsSec[0]);
  const minMark = Math.min.apply(null, bitsSec[1]);
  const commonMultiplier = Math.min.apply(null, [minGap, minMark]);

  Object.keys(duration).forEach((key) => {
    duration[key] *= commonMultiplier;
  });

  return duration;
}

function trim(string, char) {
  return string.replace(new RegExp(`^[\s${char}]+|[\s${char}]+$`, "g"), "");
}

function countDuplicateSequence(string) {
  let a = string.split(""),
    b = {},
    sec = 1,
    cur = "",
    i = 0,
    len = a.length;

  for (; i < len; i++) {
    cur = a[i];
    if (cur === a[i + 1]) {
      sec++;
      continue;
    } else {
      b[cur] = b[cur] || [];

      if (sec > 0 && b[cur][b[cur].length - 1] !== sec) {
        b[cur].push(sec);
      }

      sec = 1;
    }
  }

  Object.keys(b).forEach((key) => {
    b[key] = [...new Set(b[key])].sort((a, b) => b - a);
  });

  return b;
}

// ---------------------------------------------------------------------------------

// Adding Big Numbers
// We need to sum big numbers and we require your help.
// Write a function that returns the sum of two numbers. The input numbers are strings and the function must return a string.

function add(a, b) {
  let res = "",
    c = 0;
  a = a.split("");
  b = b.split("");
  while (a.length || b.length || c) {
    c += ~~a.pop() + ~~b.pop();
    res = (c % 10) + res;
    c = c > 9;
  }
  return res;
}

// -----------------------------------------------------------------------------------

// Matrix Determinant
// Write a function that accepts a square matrix (N x N 2D array) and returns the determinant of the matrix.
// https://www.codewars.com/kata/52a382ee44408cea2500074c

function determinant(m) {
  if (m.length == 1) {
    return m[0][0];
  }

  return m[0].reduce(function (acc, x, col) {
    return (
      acc + (col & 1 ? -1 : 1) * x * determinant(minor(m, { i: 0, j: col }))
    );
  }, 0);
}

function minor(m, indexs) {
  function removeElement(index, m) {
    return m.slice(0, index).concat(m.slice(index + 1));
  }

  return removeElement(indexs.i, m.map(removeElement.bind(null, indexs.j)));
}

// -----------------------------------------------------------------------------------

// parseInt() reloaded
// In this kata we want to convert a string into an integer. The strings simply represent the numbers in words.
// Examples:
// "one" => 1
// "twenty" => 20
// "two hundred forty-six" => 246
// "seven hundred eighty-three thousand nine hundred and nineteen" => 783919
// The minimum number is "zero" (inclusively)
// The maximum number, which must be supported is 1 million (inclusively)
// The "and" in e.g. "one hundred and twenty-four" is optional, in some cases it's present and in others it's not
// All tested numbers are valid, you don't need to validate them
// https://www.codewars.com/kata/525c7c5ab6aecef16e0001a5

const numbersMap = {
  zero: 0,
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9,
  ten: 10,
  eleven: 11,
  twelve: 12,
  thirteen: 13,
  fourteen: 14,
  fifteen: 15,
  sixteen: 16,
  seventeen: 17,
  eighteen: 18,
  nineteen: 19,
  twenty: 20,
  thirty: 30,
  forty: 40,
  fifty: 50,
  sixty: 60,
  seventy: 70,
  eighty: 80,
  ninety: 90,
  hundred: 100,
  thousand: 1000,
  million: 1000000,
};

function getSimpleNumber(number) {
  return numbersMap[number]
    ? numbersMap[number]
    : number
        .split("-")
        .map((v) => numbersMap[v])
        .reduce((prev, next) => prev + next, 0);
}

function getComplexNumber(numbers) {
  let res = 0;
  numbers = numbers.filter((v) => v !== "and");

  for (let i = 0, l = numbers.length; i < l; ) {
    if (
      numbers[i + 1] &&
      ["hundred", "thousand", "million"].includes(numbers[i + 1])
    ) {
      const v = numbers[i + 1];
      if (v === "hundred") {
        res += numbersMap[numbers[i]] * numbersMap[numbers[i + 1]];
      } else {
        res += getSimpleNumber(numbers[i]);
        res = res * numbersMap[numbers[i + 1]];
      }
      i += 2;
      continue;
    } else if (numbers[i] === "thousand") {
      res = res * numbersMap["thousand"];
    } else {
      res += getSimpleNumber(numbers[i]);
    }
    i += 1;
  }

  return res;
}

function parseInt(string) {
  const numbers = string.split(" ");
  return numbers.length === 1
    ? getSimpleNumber(numbers[0])
    : getComplexNumber(numbers);
}

// --------------------------------------------------------------------------------------------