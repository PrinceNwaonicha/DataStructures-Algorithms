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