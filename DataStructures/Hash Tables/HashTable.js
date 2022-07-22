
// Constructing a simple Javascript HashTable/Object DataStructure from scratch
class HashTable {
  constructor(size){
    this.data = new Array(size);
  }
  // simple hashing function to create address.
  _hash(key) {
  let hash = 0;
  for (let i = 0; i < key.length; i++) {
    hash = (hash + key.charCodeAt(i) * i) %
      this.data.length
    }
    return hash;
  }

  //Set function sets a key value pair at the specified address in the HashTable.
  set(key, value) {
    const address = this._hash(key)

    if (!this.data[address]) {
      this.data[address] = [];
    }
      this.data[address].push([key, value])
    return this.data
    }

  //Get function gets a value using the key in the appropriate bucket.
  get(key) {
    const hash = this._hash(key);
      const bucket = this.data[hash]
    
    // If there is a collision in the address and multiple values there it will loop over to find the value that matches the key.
    if (bucket) {
      for(let i = 0; i < bucket.length; i++) {
        if (bucket[i][0] === key) {
          return bucket[i][1]
        }
      }
    }
    return undefined
  }
  // O(n) retrieving all the keys is a lot slower than using arrays to find its items.
  //Since we have to loop through the whole hash table to find the items rather than just looping through 3 items in an array.
  keys() {
    const keysArray = [];
    for (let i=0; i < this.data.length; i++) {
      if(this.data[i]){
        keysArray.push(this.data[i][0][0])
      }
    }
    return keysArray;
  }
}

const myHashTable = new HashTable(20);
myHashTable.set('grapes', 10000);
myHashTable.set('Oranges', 10000);
myHashTable.set('Apples', 10000);
console.log(myHashTable.keys())

//-------------------------------------------------------
//Google Question
//Given an array = [2,5,1,2,3,5,1,2,4]:
//It should return 2

//Given an array = [2,1,1,2,3,5,1,2,4]:
//It should return 1

//Given an array = [2,3,4,5]:
//It should return undefined


function firstRecurringCharacter(arr) {
  const countArr = {}
  for (let i = 0; i < arr.length; i++) {
    if(countArr[arr[i]] !== undefined){
      return arr[i]
    }
    countArr[arr[i]] = 1
    
  }
  return undefined
}

console.log(firstRecurringCharacter([2,5,5,2,3,5,1,2,4]))


//Bonus... What if we had this:
// [2,5,5,2,3,5,1,2,4]
// return 5 because the pairs are before 2,2