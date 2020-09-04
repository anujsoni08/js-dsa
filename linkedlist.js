class Linkedlist {
  constructor(value) {
    this.head = {
      value,
      next: null,
    };
    this.tail = this.head;
    this.length = 1;
    return this;
  }

  append(value) {
    const newNode = {
      value,
      next: null,
    };
    this.tail.next = newNode; // attach new node to tail
    this.tail = newNode; // update tail to new node
    this.length++;
    return this;
  }

  prepend(value) {
    const newNode = {
      value,
      next: null,
    };
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }
}

let l = new Linkedlist(50);
// l.append(20);
l.prepend(10);
console.log(l);
