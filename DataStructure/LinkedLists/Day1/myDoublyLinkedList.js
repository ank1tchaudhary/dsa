class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }

}

class DoublyLinkedList {
    constructor(value) {
        this.head = new Node(value);
        this.tail = this.head;
        this.length = 1;
    }

    append(value) {
        const newNode = new Node(value);
        newNode.prev = this.tail;
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this;

    }

    prepend(value) {
        const newNode = new Node(value); //1
        newNode.next = this.head; //next = head;
        this.head.prev = newNode;//1
        this.head = newNode;//
        this.length++;

    }

    insert(index, value) {
        const newNode = new Node(value);
        const firstNode = this.traverse(index - 1);
        const nextOfNewNode = firstNode.next;
        firstNode.next = newNode;
        newNode.next = nextOfNewNode;
        newNode.prev = firstNode;
        nextOfNewNode.prev = newNode;
        this.length++;
    }

    remove(index) {
        const nodeToBeDeleted = this.traverse(index);
        const nextNode = nodeToBeDeleted.next;
        const prevNode = nodeToBeDeleted.prev;
        prevNode.next = nextNode;
        nextNode.prev = prevNode;
        this.length--;
    }

    traverse(index) {
        let newNode = this.head;
        let i = 0;
        while (index != i) {
            newNode = newNode.next;
            i++;
        }
        return newNode;

    }

    reverse() {
        const arr = [];
        let tailNode = this.tail;
        while (tailNode !== null) {
            arr.push(tailNode.value);
            tailNode = tailNode.prev;
        }
        return arr;
    }


    //        head                 tail     
    //null <--> 1 <--> 2 <--> 3 <--> 4 <--> null
    //current = tail
    //previous = tail.prev
    // revDLL() {
    //     let current = this.head;
    //     let temp = null;
    //     while (current != null) {
    //         temp = current.prev;
    //         current.prev = current.next;
    //         current.next = temp;
    //         current = current.prev;
    //     }
      
    //     return temp;

    // }

    printDLL() {
        const elements = [];
        let newNode = this.head;
        while (newNode != null) {
            elements.push(newNode.value);
            newNode = newNode.next;
        }
        return elements;
    }
}

const myDLL = new DoublyLinkedList(10);
myDLL.append(20);
// myDLL.append(30);
// myDLL.prepend(1);
// myDLL.insert(1, 5);
// myDLL.insert(2, 10);
// myDLL.remove(2);
// console.log(myDLL);
console.log(myDLL.printDLL());
// console.log(myDLL.revDLL());

