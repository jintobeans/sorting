describe('Split Array function', function () {
    it('is able to handle an empty array', function () {
        // your code here 
        expect(split([])).toEqual([]);
    });
    it('is able to split an even number array into two halves', function () {
        // your code here 
        expect(split([3, 1, 2, 4])).toEqual([[3,1], [2,4]]);
    });
    it('is able to split an odd number array into two halves', function () {
        // your code here 
        expect(split([4, 2, 5, 1, 3])).toEqual([[4, 2],[5, 1, 3]]);
    });
});

describe('Merge Sort', function(){
    it('is able to merge two sorted arrays into one sorted array', function(){
      // test the merging algorithm
      expect(mergeSort([[5],[2]])).toEqual([2,5]);
      expect(mergeSort([[3,1], [2,4]])).toEqual([1,2,3,4]);
      expect(mergeSort([[4, 2],[5, 1, 3]])).toEqual([1,2,3,4,5]);
    });
  });