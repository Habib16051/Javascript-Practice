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

// slice ():  Returns a shallow copy of a portion of an array into a new array object selected from begin to end (end not included).
// The original array is not modified.

let arr3 = [2,4,6,8,10]
let slice_arr = arr3.slice(1,4)
console.log(slice_arr); // [ 4, 6, 8 ]

// forEach():Executes a provided function once for each array element. It does not return a value.
let arr4 = [2, 7, 20,28];
arr4.forEach(()=> {
    console.log(arr4); // [ 2, 7, 20, 28 ]
});

//map(): Creates a new array with the results of calling a provided function on every element in the calling array.
let arr5 = [2, 4, 6];
let arr_map = arr5.map((a)=> {
    return a * 2;
});
console.log(arr_map); // [ 4, 8, 12 ]


// filter(): creates a new array with all elements that pass the test implemented by the provided function.
let arr6 = [1, 2, 3, 4,5,7,10];
let filteredArr = arr6.filter((a)=> {
    return  a > 2;
});
console.log(filteredArr); // [ 3, 4, 5, 7, 10 ]