const assert = require("assert");

// Feel free to look things up online!

const tokenize = str => {
  // TODO - write a function which converts a multi-word string into an array of words
  const newString = str.split(" ");
  return newString;
};

const reverse = str => {
  const splitString = str.split("");
  const reverseString = splitString.reverse();
  const joinedString = reverseString.join("");
  return joinedString;
  // TODO - write a function which reverses the string
};

const uniqueOnes = arr => {
  // TODO - write a function which returns the inputted array without duplicate elements
  const uniqueValues = [...new Set(arr)]; 
  return uniqueValues;
};

const factorial = num => {
  // TODO - write a function which returns the factorial of a positive integer
  if (num < 1) {
    return 1;
  }
  for (let i = num - 1; i > 0; i--) {
    num = num * i;
  }
  return num;
};

const zip = (arr1, arr2) => {
  // TODO - write a function which combines two arrays into an array of 2-element arrays and returns -1
  // if the two arrays are of unequal length
  // Example: zip([1, 2, 3], [5, 3, 1]) === [[1, 5], [2, 3], [3, 1]]
  if (arr1.length != arr2.length) {
    return -1;
  }
  let newArray = [];
  for (i = 0; i < arr1.length; i++) {
    newArray[i] = [arr1[i], arr2[i]]
  }
  return newArray;
};

const unzip = arr => {
  // TODO - Write a function which does the opposite of `zip()`
  let unzipped1 = [];
  let unzipped2 = [];
  for (i = 0; i < arr.length; i++) {
    unzipped1[i] = arr[i][0]
    unzipped2[i] = arr[i][1]
  }
  return [unzipped1, unzipped2];
};

const shiftRight = (str, num) => {
  // TODO - write a function which shifts a string `num` characters to the right
  // Example = shiftThree("Hello") === "lloHe"
  let arr = str.split("");
  for (let i = 0; i < num; i++) {
       arr.unshift(arr.pop());
  }
  return arr.join("");
};

const announceDate = () => {
  // TODO - write a function which returns the current date in the following format:
  // "Today's date is January 7th, 2016. It is eleven thirty-seven in the morning."


};

// Write tests here:

assert(1 < 2);
assert(1 + 2 === 3);
assert([2, 3][0] === 2);

console.log(tokenize("hello there my friend"))
console.log(reverse("hello"))
console.log(factorial(4))

console.log(shiftRight("hello", 3))

assert(shiftRight("hello", 3) === "llohe")

console.log(zip(['1', '2', '3'], ['3', '2', '1']))
console.log(unzip([['1', '3'], ['2', '2'], ['3', '1']]))

console.log(uniqueOnes(['1', '1', '2', '3', '3', '4']))

// asssert (reverse("3df") === "fd3")
