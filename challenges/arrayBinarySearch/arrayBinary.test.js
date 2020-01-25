'use strict';

const binary = require('./array-binary-search.js');

describe('finding the idx', () => {
    it('should find the idx of the searched element', () =>{
        var arr = [1,7,2,0,1,9];
        var idx = 0; 
        expect(binary.binarySearch(arr,idx)).toEqual(3);
    });
});