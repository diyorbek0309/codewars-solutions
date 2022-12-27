// Snail
// Given an n x n array, return the array elements arranged from outermost elements to the middle element, traveling clockwise.

const snail = function (array) {
  let finalArray = [];

  while (array.length) {
    finalArray.push(...array.shift());
    array.map((row) => finalArray.push(row.pop()));
    array.reverse().map((row) => row.reverse());
  }
  return finalArray;
};
