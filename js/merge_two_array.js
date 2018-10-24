/*
    Q1. Write a function and list unit test cases for the following.

    A function that takes two sorted integer lists as input and returns a merged sorted list as
    output. Duplicate list entries are preserved in the output.  The function should prioritize run-
    time efficiency.
    Unit tests can simply be enumerated as input/output pairs in a format similar to the sample below.

    Sample input and output:
    [0, 2, 3], [1, 3, 4, 5] =>; [0, 1, 2, 3, 3, 4, 5]

*/


function merge_two_array(arr1, arr2) {
    var result = [];
    var len1 = arr1.length;
    var len2 = arr2.length;
    var i=0;
    var j=0;

    while (i < len1 && j < len2) {
         if (arr1[i] <= arr2[j]) {
              result.push(arr1[i]);
              i++;
         } else {
              result.push(arr2[j]);
              j++;
         }
    }

    while (i < len1) {
         result.push(arr1[i]);
         i++;
    }

    while (j < len2) {
         result.push(arr2[j]);
         j++;
    }
    return result;
 };
