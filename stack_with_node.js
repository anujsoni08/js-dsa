class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
    return this;
  }

  peek() {
    return this.top;
  }

  push(value) {
    const newNode = new Node(value);
    if (!this.top) {
      this.top = newNode;
      this.bottom = newNode;
    } else {
      newNode.next = this.top;
      this.top = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.top) {
      return null;
    }
    if (this.top === this.bottom) {
      this.bottom = null;
    }
    const deletedNode = this.top;
    this.top = this.top.next;
    this.length--;
  }
}

let l = new Stack();
l.push(50);
l.push(40);
l.push(30);
// console.log(l);
// l.pop();
// l.pop();
// l.pop();
console.log(l);
