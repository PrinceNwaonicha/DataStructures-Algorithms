//Singely Linked List
class Node {
  constructor(value) {
    this.value = value;
    this.next = null
  }
}

class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null
      }
    this.tail = this.head;
    this.length = 1;
  }
  
  append(value) {
    let newNode = new Node(value);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this
  }
  prepend(value) {
    let newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this
  }
  
  printList() {
    const array = []
    let currentNode = this.head;
    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return array
  }

  insert(index, value) {
    //check params
    if(index >= this.length) {
        return this.append(value);
    }
    
    let newNode = new Node(value)
    let leader = this.traverseToIndex(index-1);
    let holdPointer = leader.next;
    leader.next = newNode;
    newNode.next = holdPointer;
    this.length++;
    return this
  }
  
  remove(index) {
    //check params
    if(index >= this.length) {
    index = this.length - 1
    }
    if (index === 0) {
      this.head = this.head.next
      return this
    }
    let leader = this.traverseToIndex(index-1);
    let unwantedNode = leader.next
    leader.next = unwantedNode.next
    this.length--;
    return this
  }
  
  traverseToIndex(index) {
    let counter = 0;
    let currentNode = this.head;
    while (counter!== index) {
      currentNode = currentNode.next
      counter++;
    }
    return currentNode
  }
  reverse() {
    if (!this.head.next) {
      return this;
    }
    let first = this.head;
    this.tail = this.head
    let second = first.next;
    while(second){
      const temp = second.next;
      second.next = first;
      first = second;
      second = temp;
    }
    this.head.next = null
    this.head = first;
    return this
  }
}

let myLinkedList = new LinkedList(10)
myLinkedList.append(12)
myLinkedList.append(13)
myLinkedList.append(14)

myLinkedList.prepend(19)
myLinkedList.insert(2,99)
console.log(myLinkedList.printList())
myLinkedList.remove(200)
console.log(myLinkedList.printList())


//Doublely Linked List
class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
      previous: null
      }
    this.tail = this.head;
    this.length = 1;
  }
  
  append(value) {
    
    let newNode = new Node(value);
    //Doubley New
    newNode.previous = this.tail
    this.tail.next = newNode;
    
    this.tail = newNode;
    this.length++;
    return this
  }
  prepend(value) {
    let newNode = new Node(value);
    newNode.next = this.head;
    this.head.previous = newNode
    this.head = newNode;
    this.length++;
    return this
  }
  
  printList() {
    const array = []
    let currentNode = this.head;
    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return array
  }

  insert(index, value) {
    //check params
    if(index >= this.length) {
        return this.append(value);
    }
    
    let newNode = new Node(value)
    let leader = this.traverseToIndex(index-1);
    let follower = leader.next;
    newNode.previous = leader
    leader.next = newNode;
    newNode.next = follower;
    follower.previous = newNode
    this.length++;
    return this
  }
  
  remove(index) {
    //check params
    if(index >= this.length) {
    index = this.length - 1
    }
    if (index === 0) {
      this.head = this.head.next
      return this
    }
    let leader = this.traverseToIndex(index-1);
    let unwantedNode = leader.next
    //Doubley Linked List
    leader.previous = unwantedNode.next
    leader.next = unwantedNode.next
    //Doubley Linked List
    leader.next.previous = leader
    
    this.length--;
    return this
  }
    reverse() {
    if (!this.head.next) {
      return this;
    }
    let first = this.head;
    this.tail.previous = null;
    this.tail = this.head
    let second = first.next;
    while(second){
      const temp = second.next;
      second.next = first;
      first.previous = second;
      first = second;
      second = temp;
    }
    this.head.next = null
    this.head = first;
    return this
  }
  traverseToIndex(index) {
    let counter = 0;
    let currentNode = this.head;
    while (counter!== index) {
      currentNode = currentNode.next
      counter++;
    }
    return currentNode
  }

}
