// Given 2 arrays, create a function that let's a user know (true/false)
// whether these two arrays contain any common items

//For Example:
//const array1 = ['a', 'b', 'c', 'x'];//const array2 = ['z', 'y', 'i'];
//should return false.
//-----------
//const array1 = ['a', 'b', 'c', 'x'];//const array2 = ['z', 'y', 'x'];
//should return true.

const array1 = ['a', 'b', 'c', 'x'];
const array2 = ['z', 'y', 'x'];


function getArrayOutput(arr1, arr2) {
    // space complexity :  O(n), because we are creating object map and filling its value
    // time complexity : O(n + n )= O(n), because of both operations are saperate insted of inner looping 
    const map = {};

    //convert array1 to map object
    //op1
    arr1.forEach(element => {
        if (!map[element]) {
            map[element] = true;
        }
    });

    // check if array2 has any value in map
    // op2
    for (let index = 0; index < arr2.length; index++) {
        if(map[arr2[index]]){
            return true;
        }        
    }

    // console.log(map)
    // arr2.forEach(element => {
    //     console.log("value : "+map[element])
    //     if(map[element])
    //         return true;
    // });

    return false;

}

// or

function getArrayOutput2(arr1, arr2) {
    return arr1.some(item => arr2.includes(item));
}

console.log(getArrayOutput(array1, array2));
console.log(getArrayOutput2(array1, array2));