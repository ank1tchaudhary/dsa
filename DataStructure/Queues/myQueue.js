// FIFO
// lookup : O(n)
// enqueue: O(1)
// dequeue: O(1)
// peek: O(1)
//Linked list

class Node{
    constructor(val){
        this.value = val;
        this.next = null;
    }
}

class MyQueue{
    constructor(value){
        this.head = new Node(value);
        this.tail = this.head;
        this.length = 1;
    }

    enqueue(value){
        const newNode = new Node(value);
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this;
    }

    
    dequeue(){
        this.head = this.head.next;
        this.length--;
        return this;
    }

    peek(){
        return this.head;
    }

    lookup(index){
        let currentNode = this.head;
        
        let i = 0;
        while(i != index){
            currentNode = currentNode.next;
            i++;
        }
        return currentNode;
    }

    printQueue() {
        const array = [];
        let currentNode = this.head;
        while (currentNode != null) {
            array.push(currentNode.value);
            currentNode = currentNode.next;
        }
        return array;
    }
}

const queue = new MyQueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.dequeue();
queue.dequeue();
queue.enqueue(40);
queue.dequeue();
queue.enqueue(50);
console.log(queue.printQueue());
console.log(queue.lookup(0));
// console.log(queue.peek());