class Node{
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}


class MyLinkedList{
    constructor(value){
        this.head={
            value: value,
            next: null
        }
        this.tail = this.head;
        this.length = 1;
    }

    append(value){
        const newNode = new Node(value);
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this;
    }

    prepend(value){
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        return this;
    }

    insert(index, value){

        if(index >= this.length){
           return this.append(value);
        }
        const newNode = new Node(value);
        const leaderNode = this.traverse(index-1);
        const leaderNextNode = leaderNode.next;
        leaderNode.next = newNode;
        newNode.next = leaderNextNode;
        this.length++;
    }

    remove(index){

        if(index > this.length  || index < 0){
            return "invalid index";
        }

        let headNode = this.traverse(index - 1);
        let unwantedNode = headNode.next;
        headNode.next=unwantedNode.next;
        this.length--;
    }

    traverse(index){
        let currentNode = this.head;
        let counter = 0;
        while(counter != index){
            currentNode = currentNode.next;
            counter++;
        }
        return currentNode;
    }

    printLL(){
        const array = [];
        let currentNode = this.head;
        while(currentNode != null){
            array.push(currentNode.value);
            currentNode= currentNode.next;
        }
        return array;
    }
}

const myLinkedList= new MyLinkedList(10);
myLinkedList.append(20);
myLinkedList.append(30);
myLinkedList.append(40);
myLinkedList.prepend(5);//0
myLinkedList.append(50);
myLinkedList.insert(1,1);//1
myLinkedList.insert(20,1);
myLinkedList.remove(1);
myLinkedList.append(60);
myLinkedList.remove(1);
console.log(myLinkedList.remove(20));
console.log(myLinkedList.printLL());
// console.log(myLinkedList.traverse(1));
console.log(myLinkedList);