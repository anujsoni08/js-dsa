class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Linkedlist {
  constructor(value) {
    this.head = new Node(value);
    this.tail = this.head;
    this.length = 1;
    return this;
  }

  append(value) {
    const newNode = new Node(value);
    this.tail.next = newNode; // attach new node to tail
    this.tail = newNode; // update tail to new node
    this.length++;
    return this;
  }

  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }

  printList() {
    const array = [];
    let currentNode = this.head;
    while (currentNode != null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    console.log(array);
    return array;
  }

  insert(index, value) {
    if (index >= this.length) {
      return this.append(value);
    }
    const newNode = new Node(value);
    const leader = this.traverseToIndex(index - 1);
    const holdingPointer = leader.next;
    leader.next = newNode;
    newNode.next = holdingPointer;
    this.length++;
    return this.printList();
  }

  remove(index) {
    if (index >= this.length) {
      return this.append(value);
    }
    const leader = this.traverseToIndex(index - 1);
    const unwantedNode = leader.next;
    leader.next = unwantedNode.next;
    this.length--;
    // return this.printList();
  }

  traverseToIndex(index) {
    let currentNode = this.head;
    let counter = 0;
    while (counter != index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }
}

let l = new Linkedlist(50);
l.append(10);
l.append(20);
l.append(30);
l.append(40);
l.printList();
l.remove(2);
l.printList();
// l.prepend(10);
l.insert(1, 100);
l.printList();
// console.log(l);
