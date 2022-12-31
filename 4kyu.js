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