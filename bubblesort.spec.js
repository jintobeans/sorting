// beforeAll(function () {
//   spyOn(tootsiepop, 'lick').and.callThrough(); // replace existing `tootsiepop['lick']` method
// });
// it('bubbleSorting the whole array involves this amount of swap', function () {
//   tootsiepop.getToCenter();
//   expect(tootsiepop.lick.calls.count()).toEqual(3);
// });



describe('Bubble Sort', function(){
  it('handles an empty array', function(){
    expect( bubbleSort([]) ).toEqual( [] );
  });
  it('handles an array of two numbers', function(){
    expect( bubbleSort([3,1]) ).toEqual( [1,3] );
  });
  it('handles an array of more than 2 numbers', function(){
    expect( bubbleSort([3,8,1]) ).toEqual( [1,3,8] );
    expect( bubbleSort([7,9,0,1,2]) ).toEqual( [0,1,2,7,9] );
    expect( bubbleSort([5,3,6,7,1,2]) ).toEqual( [1,2,3,5,6,7] );
  });
  it('handles an array with repeating values', function(){
    expect( bubbleSort([3,5,7,1,3,2]) ).toEqual( [1,2,3,3,5,7] );
  });
  // it('', function(){
  //   expect( bubbleSort([]) ).toEqual( [] );
  // });
});