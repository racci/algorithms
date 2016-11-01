describe("Merge Two Sorted Array", function() {

    describe("Given two empty arrays", function() {
        it("Should merge it all right", function() {

            var emptyArray1 = [];
            var emptyArray2 = [];

            var mergeArray = merge_two_array(emptyArray1, emptyArray2);
            expect(mergeArray.join(',')).toBe('');
        });
    });

    describe("Given one array empty and another one is filled", function() {
        it("Result array should be same with 2nd array ", function() {

          var emptyArray1 = [];
          var emptyArray2 = [2,3,4,5];

          var mergeArray = merge_two_array(emptyArray1, emptyArray2);
          expect(mergeArray.join(',')).toBe('2,3,4,5');
        });
    });

    describe("Given two filled arrays", function() {
        it("Should merge it all right", function() {

          var emptyArray1 = [0, 2, 3];
          var emptyArray2 = [1, 3, 4, 5];

          var mergeArray = merge_two_array(emptyArray1, emptyArray2);
          expect(mergeArray.join(',')).toBe('0,1,2,3,3,4,5');
        });
    });
});
