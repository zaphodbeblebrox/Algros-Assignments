// Add Front
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class SLL {
    constructor() {
        this.head = null;
    }

    addFront(value) {
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
        return this.head;
    }
    removeFront(value) {
        this.head = this.head.next;
        return this.head;
    }
    front(value) {
        return this.head.value;
    }
}

const list = new SLL();
list.addFront(18);
list.addFront(5);
list.addFront(73);
console.log(list.head);

// Remove Front
list.removeFront();
list.removeFront();
console.log(list.head);

//Front
console.log(list.front());
