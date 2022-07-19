class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {

    constructor() {
        this.last = null;
        this.first = this.last;
        length = 0;
    }
    enqueue(value) {
        newNode = new Node(value);
        if (this.first === null) {
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode
            this.last = newNode
        }
        length++
        return this
    }
    dequeue() {
        pointer = this.first;
        this.first = this.first.next
        length--
        if (length === 0) {
            this.first = null
            this.last = null
        }
        return pointer

    }
    pop() {

    }
    isEmpty() {
        if (this.length === 0) {
            return true
        }
        return false
    }
}

boom = new Stack()
shala = new Stack()
console.log(boom)