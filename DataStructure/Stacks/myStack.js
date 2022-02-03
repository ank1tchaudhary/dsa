//LIFO
//lookup : O(n)
//pop : O(1)
//push : O(1)
//peek : O(1)
// array without using inbuilt functin

class MyStack{
    constructor(){
        this.arr=[];
        this.length = 0;
    }

    push(value){
        this.arr[this.length] = value;
        this.length++;
        return this.arr;
    }

    
    pop(){
        this.arr.length--;
        this.length--;
        return this.arr;
    }

    peek(){
        return this.arr[this.length-1];
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
// console.log(stack.peek());
console.log(stack.lookup(2));
// console.log(stack)