//functin to merge sorted arrays
function mergeSortedArray(array1,array2){
    const outputArray = [];
    let firstArrayItem = array1[0];
    let secondArrayItem = array2[0];

    //input check
    if(array1.length === 0){
        return array2;
    }

    if(array2.length === 0){
        return array1;
    }

    let i = 1;
    let j = 1;

    while(firstArrayItem || secondArrayItem){
        if(secondArrayItem === undefined || firstArrayItem < secondArrayItem){
            outputArray.push(firstArrayItem);
            firstArrayItem = array1[i];
            i++;
        }
        else{
            outputArray.push(secondArrayItem);
            secondArrayItem = array2[j];
            j++;
        }
    }

   


    return outputArray;
}

console.log(mergeSortedArray([0,3,4,31,2],[4,6,30,1,7]));