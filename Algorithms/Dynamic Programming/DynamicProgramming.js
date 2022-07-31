//memoization without closures
//unmemoized function
//Meaning we don't store the value
function addTo80(n) {
  return n + 80;
}


// how we store the sub problem.
let cache = {};

function memoizedAddTo80(n) {
  // if the subproblem is memoized we simply return the value.
  if (n in cache) {
    return cache[n];
    
  } else { // else we run the expensive calculation and memoize it for future use.
    console.log('long time')
    cache[n] = n + 80
    return cache[n]
  }
}

console.log(memoizedAddTo80(70))
console.log(memoizedAddTo80(70))

//Memoization using Closures
function memoizedAddTo80() {
  // how we store the sub problem.
  let cache = {};
  // if the subproblem is memoized we simply return the value.
  //closures allow us to return the function and 
  return function(n) {
      if (n in cache) {
      return cache[n];
      
    } else { // else we run the expensive calculation and memoize it for future use.
      console.log('long time')
      cache[n] = n + 80
      return cache[n]
    }
  }
}
const memoized = memoizedAddTo80()
console.log(memoized(70))
console.log(memoized(70))

///0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233...

let calculations1 = 0;
let calculations2 = 0;
function fibonacci(n) {// O(2^n) Time complexity
  calculations1++;
  if (n < 2) {
    return n
  }
  return fibonacci(n - 1) + fibonacci(n - 2)
}

//top down approach
function fibonacciMaster() {// O(n) Time complexity
  let cache = {};// O(n)
  return function fib(n) {
    calculations2++
    if (n in cache) {
      return cache[n]
    } else {
      if (n < 2) {
        return n
      } else {
        cache[n] = fib(n - 1) + fib(n - 2);
        return cache[n]
      }
    }
  }
}

//bottom up approach
function fibonacciMaster2(n) {
  let answer = [0, 1];
  for (let i = 2; i <= n; i++) {
    answer.push(answer[i - 2] + answer[i - 1]);
  }
  return answer.pop();
}

fasterFibb = fibonacciMaster();

console.log(fasterFibb(1000));
console.log(calculations2)
console.log(fibonacci(30))
console.log(calculations1)