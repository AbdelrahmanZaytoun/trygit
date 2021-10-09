/* Question 00

Convert a given object into an array of arrays.

Given an object, create an array which contains arrays with the key/value pairs.

To keep this simple, the values will only be primitive types (number, string, etc.) and not other objects or array.

Furthermore, assume that the input is always clean/accurate. In other words, don't worry about handling edge cases.

Examples

- objectToArray({ a: 1, b: 2, c: 3 })
  => [['a', 1], ['b', 2], ['c', 3]]
- objectToArray({name: 'Dave', role: 'Instructor', yearsOfExperience: 10})
  => [['name', 'Dave'], ['role', 'Instructor'], ['yearsOfExperience', 10]]

*/

let objectToArray = function(obj) {

 

    
    }
    
     objectToArray({ a: 1, b: 2, c: 3 })
     objectToArray({name: 'Dave', role: 'Instructor', yearsOfExperience: 10})








//      * Question 01

// Convert an array of arrays into an object.

// This is the inverse of the previous question.

// Arrays will only have two elements: [key, value]

// To keep this simple, the values will only be primitive types (number, string, etc.) and not other objects or array.

// Furthermore, assume that the input is always clean/accurate. In other words, don't worry about handling edge cases.

// Examples:

// - arrayToObject([['a', 1], ['b', 2], ['c', 3]])
//   => { a: 1, b: 2, c: 3 }
// - arrayToObject([['name', 'Dave'], ['role', 'Instructor'], ['yearsOfExperience', 10]])
//   => {name: 'Dave', role: 'Instructor', yearsOfExperience: 10}
// */

let arrayToObject = function(arr) {




};
arrayToObject([['name', 'Dave'], ['role', 'Instructor'], ['yearsOfExperience', 10]])




/* Question 02

Write a function which will split an array into two arrays (i.e. partition it).

It will take two parameters, the first is an array of Integer values, and the second will be a callback which will return a boolean. If the callback returns true for an element, it should be placed into the left array, otherwise it should be placed into the right array.

Examples:

- partition([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], n => n % 2 === 0)
  => [[2, 4, 6, 8, 10], [1, 3, 5, 7, 9]]
- partition([-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5], n => n < 0)
  => [[-5, -4, -3, -2, -1], [0, 1, 2, 3, 4, 5]]

*/

let partition = function(arr, callback) {
    
  
      
    };
    partition([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], n => n % 2 === 0)
    
    