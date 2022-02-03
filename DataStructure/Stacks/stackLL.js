class Node {
    constructor(value) {
        this.head = value;
        this.next = null;
    }
}
class Stack_LL {
    constructor() {
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }

    push(value) {
        const newNode = new Node(value);
        if (this.length == 0) {
            this.top = newNode;
            this.bottom = newNode;
        } else {
            const temp = this.top;
            this.top = newNode;
            this.top.next = temp;
        }

        this.length++;

    }

    pop() {

        if (this.top === this.bottom) {
            this.top = null;
            this.bottom = null;
        }
        else {
            this.top = this.top.next
        }
        this.length--;
        return this;

    }

    peek() {
        return this.top;
    }

    isEmpty() {
        if (this.length === 0) {
            return true;
        }
        return false;
    }
}



const stack = new Stack_LL();
stack.push(10);
stack.push(20);
stack.push(30);
stack.pop();
stack.pop();
stack.pop();
console.log(stack.isEmpty());
console.log(stack);