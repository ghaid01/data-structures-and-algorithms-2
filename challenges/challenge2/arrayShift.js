'use strict';

let shiftedArr = {};

shiftedArr.insertShiftArray = function (arr,addedNum){
let splicedArr = arr.splice(0, Math.ceil(arr.length /2)); // or arr.splice(0,2)
splicedArr.push(addedNum) // pushing the added value to the array
// to combine or concatinate the 2 arrays together 
let combinedArrays = (splicedArr.concat(arr))
    
  return combinedArrays;
  
}
// console.log(insertShiftArray());

module.exports = shiftedArr

