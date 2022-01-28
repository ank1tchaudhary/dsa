let arr1 = [2,5,1,2,3,5,1,2,4];
let arr2 = [2,1,1,2,3,5,1,2,4];
let arr3 = [2,3,4,5]

// //time complexity : O(n^2)
// //space complexity : O(1)
// function findFirstOcurenceOfElementOld(array){
//     for (let i = 0; i < array.length; i++) {
//         for (let j = i+1; j < array.length; j++) {
//             // console.log("element1 : "+array[i]);
//             // console.log("element2 : "+array[j]);
//             if(array[i] === array[j]){
//                 return array[i];
//             }
//         }
        
//     }
//     return undefined;
// }



function firstRecurringCharacter(input) {
    for (let i = 1; i < input.length-1; i++) {
      for (let j = 0; j < input.length; j++) {
          console.log("============================================")
          console.log("input[j] : "+input[j]);
          console.log("input[j+i] : "+input[j+i]);
          console.log((j+i)+"<="+input.length);
          console.log("============================================")
        if((input[j] === input[j+i])&&((j+i)<=input.length) )
        {
          return input[j];
        }
      }
    }
    return undefined
  }




// console.log(firstRecurringCharacter(arr1));
console.log(firstRecurringCharacter(arr2));
// console.log(firstRecurringCharacter(arr3));


//time complexity : O(n)
//space complexity : O(n)
function findFirstOcurenceOfElementNew(array){
    let map={};
    for (let i = 0; i < array.length; i++) {
       if(map[array[i]] !== undefined){
           return array[i];
       }
       else{
           map[array[i]]=i;
       }
    }
    return undefined;
}

// console.log(findFirstOcurenceOfElementNew(arr1));
// console.log(findFirstOcurenceOfElementNew(arr2));
// console.log(findFirstOcurenceOfElementNew(arr3));
// findFirstOcurenceOfElementNew(arr2)
