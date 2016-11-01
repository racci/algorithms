describe("Maximum Product", function(){

    describe("Given a filled arrays", function() {
        it("Should return max product of maximum 3 elements", function() {

          var arr = [10, 3, 0, -2, 12, 5, 1, 1, 4];

          var max_product = maximum_product(arr);
          expect(max_product).toEqual(600);
        });
    });

    describe("Given bigger number filled array", function() {
        it("Should return ", function() {

          var arr = [99999,99999999,99999999, -2, 12, 5, 1, 1, 4];

          var max_product = maximum_product(arr);

          expect(max_product).toEqual('Result bigger than 32 bit number');
        });
    });

});
