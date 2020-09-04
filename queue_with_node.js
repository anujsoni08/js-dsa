class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
    return this;
  }

  peek() {
    return this.top;
  }

  enqueue(value) {
    const newNode = new Node(value);
    if (!this.top) {
      this.top = newNode;
      this.bottom = newNode;
    } else {
      this.bottom.next = newNode;
      this.bottom = newNode;
    }
    this.length++;
    return this;
  }

  dequeue() {
    if (!this.top) {
      return null;
    }
    if (this.top === this.bottom) {
      this.bottom = null;
    }
    this.top = this.top.next;
    this.length--;
  }
}

let l = new Queue();
l.enqueue(50);
l.enqueue(40);
l.enqueue(30);
// console.log(l);
// l.pop();
// l.pop();
// l.pop();
console.log(l);
