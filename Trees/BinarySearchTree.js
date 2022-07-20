class Node {
  constructor(value) {
    this.value = value;
    this.right = null;
    this.left = null
  }
}

class BinarySearchTree {
  
  constructor() {
    this.root = null
  }
  insert(value){
    let newNode = new Node(value);
    let pointer = this.root
    while(true) {
    if(pointer === null) {
      this.root = newNode;
      return this
    } else if (newNode.value < pointer.value) {
      if(pointer.left === null) {
        pointer.left = newNode
        return this
      } else {
        pointer = pointer.left
      }
    } else if (pointer.value < newNode.value ) {
      if(pointer.right === null) {
        pointer.right = newNode
        return this
      } else {
        pointer = pointer.right
      }
    }
    }
  }
  lookup(value) {
    let pointer = this.root
    while(true) {
    if(pointer === null) {
      return null
    } else if (value < pointer.value) {
      if(pointer.left === null) {
        pointer.left = newNode
        return null
      } else {
        pointer = pointer.left
      }
    } else if (pointer.value < value ) {
      if(pointer.right === null) {
        pointer.right = newNode
        return null
      } else {
        pointer = pointer.right
      }
    } else if (pointer.value === value) {
      return pointer
    }
    }
  }
}

boom = new BinarySearchTree()

console.log(boom)
console.log(boom.insert(90))
boom.insert(98)
boom.insert(234)
boom.insert(7)
boom.insert(14)
boom.insert(97)
console.log(boom)