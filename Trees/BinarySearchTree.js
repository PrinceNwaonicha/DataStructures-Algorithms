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

  // IMPORTANT This is not important for Interviews But it's good to know
  remove(value) {
    let pointer = this.root;
    let parentNode = null;
    while (pointer) {
      if(value < pointer.value){
        parentNode = pointer
        pointer = pointer.left
      } else if(pointer.value < value ) {
        parentNode = pointer
        pointer = pointer.right
      } else if (pointer.value === value) {
        // we have a match!
        //Option 1: No right child:
        if (pointer.right === null) {
          if(parentNode.right.value === value){
            parentNode.right = pointer.left
            
          } else if (parentNode.left.value === value) {
            parentNode.left = pointer.left
          }
          return this
        } 
          //Option 2: Right child which doesn't have a left child
        else if (pointer.right.left === null) {
          if(parentNode.right.value === value){
            pointer.right.left = parentNode.right.left
            parentNode.right = pointer.right
            
          } else if (parentNode.left.value === value) {
            pointer.right.left = parentNode.left.left
            parentNode.left = pointer.right
          }
          return this
          //Option 3: Right child that has a left child
        } else {
          pointer = pointer.right
          
        }
      }
    }
  }
}
function traverse(node) {
  const tree = { value: node.value };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
}

boom = new BinarySearchTree()


boom.insert(90)
boom.insert(98)
boom.insert(234)
boom.insert(7)
boom.insert(14)
boom.insert(97)
console.log(boom.remove(98))
