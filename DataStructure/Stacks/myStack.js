//LIFO
//lookup : O(n)
//pop : O(1)
//push : O(1)
//peek : O(1)
// array without using inbuilt functin

class MyStack{
    constructor(){
        this.arr=[];
    }

    push(value){
        this.arr[this.arr.length] = value;
        return this;
    }

    
    pop(){
        this.arr.length--;
        return this;
    }

    peek(){
        return this.arr[this.arr.length-1];
    }

    lookup(index){
        for(let i=0; i<this.arr.length; i++){
            if(index === i){
                return this.arr[i];
            }
        }
        return "index does not exist.";
    }
}

const stack= new MyStack();
stack.push(10);
stack.push(20);
stack.push(30);
stack.pop();
stack.pop();
console.log(stack)
console.log(stack.lookup(1));
console.log(stack.peek());