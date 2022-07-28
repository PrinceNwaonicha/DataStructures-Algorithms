//Bubble Sort my solution
const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function bubbleSort(array) {
  let i = 0
  let j = 1
  let temp = 0
  let count = 0
  while (true) {
    if (array[i] > array[j]) {
      temp = array[j]
      array[j] = array[i]
      array[i] = temp
    }
    i++
    j++
    if( j === array.length) {
      i = 0
      j = 1
      count += 1
    }
    if ( count === array.length) {
      return array
    }
  }
}

bubbleSort(numbers);
console.log(numbers);

//Andrei's Solution
function bubbleSort2(array) {
    const length = array.length;
    for (let i = 0; i < length; i++) {
        for (let j = 0; j < length; j++) {
            if (array[j] > array[j + 1]) {
                //Swap numbers
                let temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }
}

bubbleSort2(numbers);
console.log(numbers)


//Selection Sort

function selectionSort(array) {
  let lowest
  let temp 
  for (let i = 0; i < array.length;i++) {
    for(let j = 0; j < array.length; j++) {
      if (i === j) {
        lowest = array[j]
        temp = j
      }
      if (array[j] < lowest) {
        lowest = array[j]
        temp = j
      }
    }
    
    array[temp] = array[i]
    array[i] = lowest
  }
  return array
}
console.log(selectionSort(numbers))
console.log(numbers);

//InsertionSort

function insertionSort(array) {
  const length = array.length;
  for (let i = 0; i < length; i++ ) {
    if (array[i] < array[0]) {
      //move number to the first position
      array.unshift(array.splice(i,1)[0]);
    } else {
      //find where number should go
      for (let j = 1; j < i; j++) {
        if (array[i] > array[j-1] && array[i] < array[j]) {
          //move number to the right spot
          array.splice(j,0,array.splice(i,1)[0]);
        }
      }
    }
  }
}

insertionSort(numbers);
console.log(numbers);



//MergeSort algorithm
function mergeSort (array) {
  if (array.length === 1){
    return array
  }
  // To split in half we need to figure out the middle
  const middle = Math.floor(array.length / 2)
  
  // Split Array in into right and left
  const left = array.slice(0,middle)

  const right = array.slice(middle)
  

  
  return merge(
    mergeSort(left),
    mergeSort(right)
  )
}

// merge the left and right arrays
function merge(left, right){
  // create initial result array and index pointers for left and right index
  let result = [], leftIndex = 0, rightIndex = 0

  //concatenate values together while comparing the left index to right
  //and put them in the result in order
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++ // move left array pointer
    } else {
      result.push(right[rightIndex]);
      rightIndex++; // move right array pointer
    }
  }

  //At the end we need to concat here because there will be one element remaining
  //either from the left or the right
  return result
    .concat(left.slice(leftIndex))
    .concat(right.slice(rightIndex));
}

const answer = mergeSort(numbers);
console.log(answer);