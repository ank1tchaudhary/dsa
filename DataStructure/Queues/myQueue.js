// FIFO
// lookup : O(n)
// enqueue: O(1)
// dequeue: O(1)
// peek: O(1)
//Linked list

class Node {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

class MyQueue {
    constructor() {
        this.first = null;
        this.last = null;
        this.length = 0;
    }

    enqueue(value) {
        const newNode = new Node(value);
        if (this.length === 0) {
            this.first = newNode;
            this.last = newNode;
        }
        else {
            this.last.next = newNode;
            this.last = newNode;
        }
        this.length++;
        return this;
    }


    dequeue() {
        if (this.length === 0) {
            return null;
        }
        if (this.first === this.last) {
            this.last = null
        }
        this.first = this.first.next;
        this.length--;
        return this;
    }

    peek() {
        return this.first;
    }

    lookup(index) {
        let currentNode = this.first;

        if (this.length === 0) {
            return null;
        } else {
            let i = 0;
            while (i != index) {
                currentNode = currentNode.next;
                i++;
            }

        }
        return currentNode;
    }

    printQueue() {
        const array = [];
        let currentNode = this.first;
        while (currentNode != null) {
            array.push(currentNode.value);
            currentNode = currentNode.next;
        }
        return array;
    }
}

const queue = new MyQueue();
queue.enqueue(20);
queue.enqueue(30);
queue.dequeue();
queue.dequeue();
queue.enqueue(40);
queue.dequeue();
queue.enqueue(50);
queue.dequeue();
console.log(queue.printQueue());
console.log(queue.lookup(0));
console.log(queue);