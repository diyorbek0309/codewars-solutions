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
