'use strict';

const shiftArr = require('./arrayShift.js');

describe('dhdv', () => {
    it('should add an element to the middle of the array', () => {
        let addedNum = 0;
        let arr = [1, 7, 2, 1, 9];
        expect(shiftArr.insertShiftArray(arr,addedNum)).toEqual([1, 7, 2,0, 1, 9]);
    });
});