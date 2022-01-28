class HashTable{
    constructor(size){
        this.data=new Array(size);
    }

    //O(1) : since we are only using this to get the hash against the key and by default it should be O(1)
    _hash(key){
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash=(hash + key.charCodeAt(i) * i) % this.data.length;
        }
        // console.log(key,hash);
        return hash;
    }

    mapelements(){
        return this.data;
    }

    //O(1) : since we are only storing it 
    set(key,value){
        if(this.data[this._hash(key)] !== undefined){
            this.data[this._hash(key)].push([key,value]);

        }else{

            this.data[this._hash(key)] = [];
            this.data[this._hash(key)].push([key,value]);
        }
    }

    //O(1) : considering if we have no collision
    get(key){
        // console.log(this.data[this._hash(key)].length);
        if(this.data[this._hash(key)]){
            for (let i = 0; i < this.data[this._hash(key)].length; i++) {
                if(this.data[this._hash(key)][i][0] === key){
                    return this.data[this._hash(key)][i][1];
                }
            }
        }
         return undefined;
    }

    getKeys(){
        let t1= performance.now();

        let keys= [];
        for (let i = 0; i < this.data.length; i++) {
            if(this.data[i]){
                for(let j = 0; j < this.data[i].length ; j++){
                    keys.push(this.data[i][j][0]);
                }
            }
        }
        let t2= performance.now();
        console.log("getKeys() "+(t2-t1))
        return keys;
    }
    
    // keys() {
    //     let t1= performance.now();
    //     if (!this.data.length) {
    //         return undefined
    //     }
    //     let result = []
    //     // loop through all the elements
    //     for (let i = 0; i < this.data.length; i++) {
    //         // if it's not an empty memory cell
    //         if (this.data[i] && this.data[i].length) {
    //           // but also loop through all the potential collisions
    //           if (this.data[i].length > 1) {
    //             for (let j = 0; j < this.data[i].length; j++) {
    //               result.push(this.data[i][j][0])
    //             }
    //           } else {
    //             result.push(this.data[i][0][0])
    //           } 
    //         }
    //     }
    //     let t2= performance.now();
    //     console.log("keys() "+(t2-t1))
    //     return result; 
    //   }
}


const myHashTable = new HashTable(10);

myHashTable.set("ankit","ank");
myHashTable.set("ankitt","ankit");
myHashTable.set("Rahul","ank");
// console.log(myHashTable.get("ankit"));

// console.log(myHashTable.get("ram"));
// console.log(myHashTable.mapelements());
console.log(myHashTable.getKeys());
// console.log(myHashTable.keys());