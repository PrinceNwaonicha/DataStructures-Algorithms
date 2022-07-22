class  Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
// Using Linked lists
class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }
  peek() {
    return this.top
  }
  push(value){
    const newNode = new Node(value)
    newNode.next = this.top
    this.top = newNode
    if(this.length === 0) {
      this.bottom = this.top
    }
    this.length++
    return this
  }
  pop(){
    if(this.length === 0){
      return null
    }
    const popped = this.top
    this.top = this.top.next
    this.length--
    if (this.length === 1 || this.length === 0) {
      this.bottom = this.top
    }
    return popped
  }
  isEmpty() {
    if(this.length === 0) {
      return true
    }
    return false
  }
}

boom = new Stack()
shala = new Stack()
console.log(boom.push(79))
console.log(boom.push(99))
console.log(boom.push(239))
console.log(boom.pop())
console.log(boom.peek())
console.log(boom.isEmpty())
console.log(shala.isEmpty())

class Stack {
  
  constructor() {
    this.array = []
    
  }
  peek() {
   return this.array[this.array.length - 1]
  }
  push(value){
    this.array.push(value)
    return this
  }
  pop(){
    return this.array.pop()
    
  }
  isEmpty() {
    if(this.array.length === 0) {
      return true
    }
    return false
  }
}