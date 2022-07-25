//Bubble Sort
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