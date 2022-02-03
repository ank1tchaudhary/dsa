class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}


class MyLinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null
        }
        this.tail = this.head;
        this.length = 1;
    }

    append(value) {
        const newNode = new Node(value);
        this.tail.next = newNode;
        this.tail = newNode;
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

    insert(index, value) {

        if (index >= this.length) {
            return this.append(value);
        }
        const newNode = new Node(value);
        const leaderNode = this.traverse(index - 1);
        const nextOfNewNode = leaderNode.next;
        leaderNode.next = newNode;
        newNode.next = nextOfNewNode;
        this.length++;
    }

    remove(index) {

        if (index > this.length || index < 0) {
            return "invalid index";
        }

        let headNode = this.traverse(index - 1);
        let unwantedNode = headNode.next;
        headNode.next = unwantedNode.next;
        this.length--;
    }

    traverse(index) {
        let currentNode = this.head;
        let counter = 0;
        while (counter != index) {
            currentNode = currentNode.next;
            counter++;
        }
        return currentNode;
    }

    reverse_Iteration() {
        //note: "next" and "previous" keyword here is pointer 

        //there should be at least one node in linked list

        //Step 1:  then we create a "previous" pointer which we set to null

        //Step 2:  now assign the current node "next" pointer to the "previous" which is null
        //since we have re assigned the "next" pointer to the previous one 
        //so we gonna lose the current "next" pointer value 

        //Step 3:  so we save the next pointer Node in some temp variable before reassigning the pointer
        //Step 4:  then we gonna shift the "previous" pointer to the current pointer
        //then shift current to next node


        let current = this.head;
        let previous = null;


        while (current != null) {
            let nextPointer = current.next;
            current.next = previous; // at first our current pointer pinting to null
            previous = current;// shift previous pointer to current
            current = nextPointer;// shift current to next node
        }
        return previous; // it will pointing to head

    }

    printLL() {
        const array = [];
        let currentNode = this.head;
        while (currentNode != null) {
            array.push(currentNode.value);
            currentNode = currentNode.next;
        }
        return array;
    }
}

const myLinkedList = new MyLinkedList(10);
myLinkedList.append(20);
myLinkedList.append(30);
myLinkedList.append(40);
// myLinkedList.prepend(5);//0
// myLinkedList.append(50);
// myLinkedList.insert(1,1);//1
// myLinkedList.insert(20,1);
// myLinkedList.remove(1);
// myLinkedList.append(60);
// myLinkedList.remove(1);
// myLinkedList.remove(20);
console.log(myLinkedList.printLL());
// console.log(myLinkedList.traverse(1));
// console.log(myLinkedList);
console.log(myLinkedList.reverse_Iteration());
// console.log(myLinkedList.reverse_Iteration());