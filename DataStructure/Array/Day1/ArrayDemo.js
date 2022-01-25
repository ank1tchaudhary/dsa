//Operations static array : fixed in size
// var arr=[1,2,3,4];
    // arr[2] : find the element at specific location : O(1)
    // push(5) : add element at the end of an array : O(1)
    // pop() : delete the last item from the array : O(1)
    // unshift(7) : add element at the beginning of array : O(n)
    // splice(2,0,8) : from index we want to remove, how many element we want to remove
                // and items to add in place of deleted element : O(n)


class ArrayDemo{
    constructor(){
        this.length = 0;
        this.data = {};
    }

    //O(1)
    get(index){
        return this.data[index];
    }

    //O(1)
    push(item){
        this.data[this.length] = item;
        this.length++;
        return this.length;
    }
    
    //O(1)
    pop(){
    const lastItem = this.data[this.length-1];
    delete this.data[this.length-1];
    this.length--;
    return lastItem;
    }

    //O(n)
    delete(index){
        const item= this.data[index];
        this.shiftItem(index);
    }


    //O(n)
    shiftItem(index){
        for (let i = index; i < this.length - 1; i++) {
            this.data[i]= this.data[i+1];    
        }
        delete this.data[this.length-1];
        this.length--;
    }

      //O(n)
      unshift(item){
          for (let i = this.length; i >= 0; i--) {
              this.data[i+1]= this.data[i];    
            }
            this.data[0] = item;
        delete this.data[this.length+1];
        this.length++;
    }

//Mr Ankit Kumar Chaudhary
    
    // deleteAtIndexItem(item){

    // }
    // // unshift(){}
    // splice(){}
}

const newArray= new ArrayDemo();
newArray.push("Ankit");
// newArray.push("Chaudhary");
newArray.push("Kumar");
newArray.push("Chaudhary");
newArray.push("Ji");
newArray.unshift("Mr")
newArray.unshift("1")
newArray.delete(1);
newArray.pop();
newArray.unshift("Mr")
newArray.delete(1);

// newArray.pop();
console.log(newArray.data);
// console.log(newArray.get(1));