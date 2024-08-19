let arr = [1, 2, 3];
// push() operation
arr.push(4); // arr is now [1, 2, 3, 4] - add element at the end of array
// pop() operation
arr.pop(); // arr is now [1, 2, 3] - remove the last element from the array
// shift(): Removes the first element from an array and returns that element
arr.shift()
// unshift():Adds one or more elements to the beginning of an array.
arr.unshift(10,14); //[10, 14, 2, 3]
console.log(arr);
//concat():Merges two or more arrays and returns a new array without modifying the original arrays.
let arr2 = [80, 70, 25]
let new_arr = arr.concat(arr2);
console.log(new_arr); // [ 10, 14, 2, 3, 80, 70, 25 ]
console.log(arr); // [ 10, 14, 2, 3 ]
console.log(arr2); // [ 80, 70, 25 ]