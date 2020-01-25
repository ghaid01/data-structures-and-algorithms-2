'use strict';

let binSch = {};

binSch.binarySearch = function(arr,idx){
for ( let i = 0; i < arr.length; i++){
    if(arr[i] == idx){
        return i 
    }
}return -1
}

// console.log(binarySearch(arr,idx))
 
module.exports = binSch

// var nums = [1, 2, 3, 4, 5];
// function binarySearch(arr,idx){
// for ( let i = 0; i < arr.length; i++){
//     if(arr[i] == idx){
//         return i 
//     }
// }return -1
// }

// console.log(binarySearch(rainbow,3));
// console.log(binarySearch(rainbow,9));