//Queue : FIFO
//stack : LIFO

//(first)1 2 3 4(last)

class Q_S {
    constructor() {
        this.stack1 = [];
        this.stack2 = [];
    }

    //1. when inserting element, element should be inserted at the end of the stack1,
    // so we have to move each item everytime to stack2 when we are inserting element in stack1.
    // O(n)
    enqueue(value) {

        while (this.stack1.length != 0) {
            this.stack2.push(this.stack1.pop());
        }
        if (this.stack1.length == 0) {
            this.stack1.push(value);
        }

        while (this.stack2.length != 0) {
            this.stack1.push(this.stack2.pop());
        }

    }

    //O(1)
    dequeue() {
        return this.stack1.pop();
    }

    //O(1)
    peek() {
        return this.stack1[this.stack1.length-1];
    }


}


const queue_stack = new Q_S();
queue_stack.enqueue(10);
queue_stack.enqueue(20);
queue_stack.enqueue(30);
console.log(queue_stack.peek());
// queue_stack.dequeue();
// queue_stack.enqueue(40);
// queue_stack.dequeue();
// console.log(queue_stack);