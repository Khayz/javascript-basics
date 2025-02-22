// TODO: Challenge 1 - Write a function that takes in a positive number and returns the sum of all numbers up to that number
function sumUpTo(num) {
  let result = 0;
  for (let x=0; x<=num; x++) {
    result += x;
  }
  return result;
};

console.log(sumUpTo(5))

// TODO: Challenge 2 - Write a function that takes in an array of positive numbers and returns the sum of all the numbers
function sumArrayNumbers (arr) {
  let sum = 0;
  let idx = 0;

  while (idx < arr.length) {
    sum += arr[idx];
    idx += 1;
  }

  return sum;
};

console.log(sumArrayNumbers([1,2,3,4,5]))

// TODO: Challenge 3 - Write a function that takes in an array of numbers and returns the average of all the numbers
function averageArrayNumbers(arr) {
  return arr.reduce((acc, curr) => acc + curr, 0) / arr.length;
}

console.log(averageArrayNumbers([1,2,3,4,5]))

// TODO: Challenge 4 - Write a function that takes in an array of numbers and returns the largest number
function largestNumberFromArray(arr) {
  // Two Solutions

  // First
  let largest = arr[0];
  for (let x=1; x<arr.length; x++) {
    largest = largest < arr[x] ? arr[x] : largest;
  }

  return largest;

  // Second - divide and conquer
  if (arr.length === 1) {
    return arr[0];
  }

  let mid = Math.floor(arr.length / 2);
  let left = largestNumberFromArray(arr.slice(0, mid));
  let right = largestNumberFromArray(arr.slice(mid));
  return left > right ? left : right;

  // Which is better? The first solution is better because it has a time complexity of O(n) while the second solution has a time complexity of O(n log n)
}

console.log(largestNumberFromArray([5,7,9,10,4,2]))

// TODO: Challenge 5 - Write a function that takes in an array of numbers and returns the smallest number

function smallestNumberFromArray(arr) {
  // Two Solutions

  // First
  let smallest = arr[0];
  for (let x=1; x<arr.length; x++) {
    smallest = smallest > arr[x] ? arr[x] : smallest;
  }

  return smallest;

  // Second - divide and conquer
  if (arr.length === 1) {
    return arr[0];
  }

  let mid = Math.floor(arr.length / 2);
  let left = smallestNumberFromArray(arr.slice(0, mid));
  let right = smallestNumberFromArray(arr.slice(mid));
  return left < right ? left : right;
}

// TODO: Challenge 6 - Write a function that takes in an array of numbers and returns only the odd numbers
function oddNumbersFromArray(arr) {
  return arr.filter(num => num % 2 !== 0);
}

// TODO: Challenge 7 - Write a function that takes in an array of numbers and returns only the even numbers
function evenNumbersFromArray(arr) {
  return arr.filter((number) => number % 2 === 0)
};

// TODO: Challenge 8 - Write a function that takes in an array of numbers and returns an array of only the unique numbers
function uniqueNumbersFromArray (arr) {
  let dicc = {};

  for(let x=0; x<arr.length; x++) {
    let current = arr[x];
    dicc[current] = dicc[current] ? dicc[current] + 1 : 1;
  }

  return Object.keys(dicc).filter((key) => dicc[key] < 2);
}

console.log(uniqueNumbersFromArray([1,1,2,2,3,4,5,5,6]))

// TODO: Extra Challenge - FizzBuzz
function fizzBuzz (range) {
  for(let x=1; x<=range; x++) {
    let word = '';
    if (x % 3 === 0) {
      word += 'Fizz'
    }

    if (x % 5 === 0) {
      word = word + 'Buzz'
    }

    console.log(word ? word : x)
  }

  return { Range: range};
}

console.log(fizzBuzz(15))
