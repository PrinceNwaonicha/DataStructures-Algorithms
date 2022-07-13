const strings =
    ['a', 'b', 'c', 'd'];
    
//4*4 = 16 bytes of storage

//push
strings.push('e'); //O(1)

//pop
strings.pop(); //O(1)

//unshift
strings.unshift('x'); //O(n)

//splice
strings.splice(2, 0, 'alien'); // O(n)

console.log(strings)

//Implementing an array Creating an array from scratch
class MyArray {
    constructor() {
        this.length = 0;
        this.data = {};
    }
    get(index) {
        return this.data[index]
    }

    push(item) {
        this.data[this.length] = item;
        this.length++
        return this.length;
    }
    pop() {
        const lastItem = this.data[this.length - 1];
        delete this.data[this.length - 1];
        this.length--;//decrease by 1
        return last.item;
    }

    delete(index) {
        const item = this.data[index];
        this.shiftItems(index);
    }

    shiftItems(index) {
        for (let i = index; i < this.length - 1; i++){
            this.data[i] = this.data[i+1]
        }
        delete this.data[this.length - 1];
        this.length--;
    }
}

const newArray = new MyArray();
newArray.push('hi');

console.log(newArray);

// reverse an array
function reversed(sentence) {
  if (!sentence || sentence.length < 2 || typeof sentence !== 'string'){
    return 'Sorry that\'s not a string'
  }
  let newArr = []
  for (let i = sentence.length - 1; i >= 0; i--) {
    newArr.push(sentence[i])
  }
  return newArr.join('');
}

let words = "olleh"

console.log(reversed(words))

function reverse2(str) {
  return str.split('').reverse().join('')
}

console.log(reverse2(words))

const reverse3 = str => [...str].reverse().join('');

console.log(reverse3('Hi My name is Prince'))