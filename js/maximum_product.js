/*
    Q2. Write a function and list unit test cases for the following.

    A function that takes a list of integers and returns the maximum product that can be derived
    from any three integers in the list. An ArgumentException is thrown for any input values that
    will not produce a valid Int32 product.

    Unit tests can simply be enumerated as input/output pairs in a format similar to the sample below.

    Sample input and output: 
    [10, 3, 0, -2, 12, 5, 1, 1, 4] =>; 600  // 10*12*5 = 600
*/
/*
   SOLUTION
   Solution 1.
      Sort input array. Then get product of top max 3 elements.

   Solution 2.
      Define 3 variables, Set them each time while looping in input array with the bigger ones.
      Find product of 3 elements.

*/
// I prefer to use Solution 2
function maximum_product(arr){

    var max1 = -Infinity;
    var max2 = -Infinity;
    var max3 = -Infinity;

    for(var i = 0; i < arr.length; i++){

        if(arr[i] > max1){
            max3 = max2;
            max2 = max1;
            max1 = arr[i];
        }else if(arr[i] > max2){
            max3 = max2;
            max2 = arr[i];
        }else if(arr[i] > max3){
            max3 = arr[i];
        }
    }

    return max1 * max2 * max3;
}
