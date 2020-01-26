'use strict';

const matrix = module.exports = {};

matrix.matrixArrSum = function (arr) {
    let sumArr = [];
    for (let i = 0; i < arr.length; i++) {
        let sum = 0;
        for (let j = 0; 0 < arr[i].length; j++) {
            sum += arr[i][j]
            sumArr.push(sum);
        }
        console.log(`The summed array is [${sumArr}]`);
    }
    // matrixArrSum([[1, 2, 5], [3, 5, 4]])
    matrixArrSum()
}