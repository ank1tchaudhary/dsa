class MyObj {
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
        const newNode = new MyObj(value);
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this;
    }

    prepend(value){
        const newNode = new MyObj(value);
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        return this;
    }
}

const myLinkedList= new MyLinkedList(10);
myLinkedList.append(20);
myLinkedList.append(30);
myLinkedList.append(40);
myLinkedList.prepend(5);
myLinkedList.append(50);
console.log(myLinkedList);