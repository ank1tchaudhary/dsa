// Log all pairs of array
const boxes = [1,2,3,4,5]

const boxes2 = [1,2,3,4,5]
let boxPairs = [];
function logAllPairsOfArray(array){
    console.log("\n==logAllPairsOfArray")
    array.forEach(element1 => {
        array.forEach(element2 => {
            boxPairs.push([element1, element2]);

        });
    });
}

// or 
function logAllPairsOfTwoArray(array,arr){
    console.log("\n==logAllPairsOfTwoArray==")
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j< array.length; j++) {
            boxPairs.push([array[i], arr[j]]); 
        }

        
    }
}


// pair sums 
function logAllPairsOfArrayAndThenSum(array){
    console.log("\n==logAllPairsOfArrayAndThenSum")
    array.forEach(firstElement => {
        array.forEach(secondElement => {
            boxPairs.push([firstElement + secondElement]);

        });
    });
}

//or
function logAllPairsOfTwoArrayAndThenSum(array,arr){
    console.log("\n==logAllPairsOfTwoArrayAndThenSum==")
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j< array.length; j++) {
            boxPairs.push([array[i]+ arr[j]]); 
        }

        
    }
}

logAllPairsOfArray(boxes);

console.log(boxPairs);
//-----------------------------------
boxPairs = [];
logAllPairsOfTwoArray(boxes,boxes2);

console.log(boxPairs);


//-----------------------------------
boxPairs = [];

logAllPairsOfArrayAndThenSum(boxes);

console.log(boxPairs);

//-----------------------------------
boxPairs = [];
logAllPairsOfTwoArrayAndThenSum(boxes,boxes2);

console.log(boxPairs);