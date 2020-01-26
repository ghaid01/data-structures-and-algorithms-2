'use strict';

const matrixArr = require('../matrix.js');

describe('sum numbers', () => {
    it('should add numbers', () => {
    //  let arr = [[1, 2, 5], [3, 5, 4]];
    let arr = [1,2,5];
    //  expect(matrixArr.matrixArrSum(arr)).toEqual(8,12)   
    expect(matrixArr.matrixArrSum(arr)).toEqual(8)
    });
});