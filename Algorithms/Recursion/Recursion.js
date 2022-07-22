let counter = 0;

function inception() {
  console.log(counter);
  if (counter > 3) {
    return 'done';
  }
  counter++
  return inception();
}

console.log(inception())


// 1. Identify the base case
// 2. Identify the recursive case
// 3. Get closer and closer and return when needed. Usually you hae two returns

// Write two functions that finds the factorial of any number. One should use recursive, the other should just use a for loop

function findFactorialRecursive(number) {
  if (number === 2) {
    return 2
  }
  return answer = number * findFactorialRecursive(number - 1);
}

function findFactorialIterative(number) {
  let answer = 1
  for (let i = 2; i <= number; i++) {
    answer = answer * i
  }
  return answer;
}

console.log(findFactorialRecursive(3))
console.log(findFactorialIterative(3))


// Given a number N return the index value of the Fibonacci sequence, where the sequence is:

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144 ...
// the pattern of the sequence is that each value is the sum of the 2 previous values, that means that for N=5 → 2+3

//For example: fibonacciRecursive(6) should return 8

function fibonacciIterative(n){
  let before = 0
  let actual = 1
  if (n == 0){
    return 0
  }
  let next = actual + before
  for (i = 1; i < n; i++){
    next = actual + before
    before = actual
    actual = next
    
  }
  return next
}
console.log(fibonacciIterative(6));

function fibonacciRecursive(n) {
  if (n <= 1){
    return n
  }
  return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2)
}

console.log(fibonacciRecursive(6))

//Iterative Approach
//Implement a function that reverses a string using iteration...and then recursion!
function reverseString(str) {
  arr = []
  for (let i = str.length; i > 0; i--) {
    arr.push(str[i - 1])
  }
  return arr.join("")
  
}

console.log(reverseString('yoyo mastery'))
//should return: 'yretsam oyoy'


// Recursive Approach
//Implement a function that reverses a string using iteration...and then recursion!
let count = 0
let s = ""
function reverseString(str) {
  if (s === '') {
    count = str.length - 1
  }
  if (count === 0) {
    return  s += str[count]
  }
  s += str[count]
  count--
  return reverseString(str) 
}

console.log(reverseString('yoyo mastery'))
//should return: 'yretsam oyoy'