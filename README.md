## Unibit Games Assignment

### Quesion Statement
Given an array of integers and a target value, you must determine which two integers' sum equals the target and return a 2D array. Then merge the array into a single array with sorting ( ascending ) order, in the next step double the target value and find again the combination of digits (can be multiple digits ) that are equal to the double targeted value and returned into a 2D array.

### Sample Input #1
`Array` = [1, 3, 2, 2, -4, -6, -2, 8]
`Target` = 4

### Sample Output #1
`First Combination For “4”` : [ [1,3],[2,2],[-4,8],[-6,2] ];
`Merge Into a single Array` : [-6, -4, 1, 2, 2, 2, 3, 8];


### Sample Input #2
`Array` = [1, 3, 2, 2, -4, -6, -2, 8]
`Target` = 8

### Sample Output #2
`Second Combination For “8”` : [ [ 1,3,2,2], [8,-4,2,2],....,[n,n,n,n] ]