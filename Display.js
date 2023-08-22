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

    display() {
        let currentNode = this.head;
        let arr = [];
        while (currentNode !== null) {
            arr.push(currentNode.value);
            currentNode = currentNode.next;
        }
        console.log(arr);
    }
}

const list = new SLL();
list.addFront(76);
list.addFront(2);
list.display();
list.addFront(11.41);
list.display();
