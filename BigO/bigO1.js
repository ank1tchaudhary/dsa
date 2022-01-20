const nemo= ['nemo'];
const largeArray = new Array(100).fill('nemo');

function findNemo(input){
    console.log("================Big O(1)[Horizontal line]============")
    //No. of operations will stay the same irrespective of no. of inputs and infrastructure.
    let t2 = performance.now();
    console.log('Found at fixed input[0] : '+ input[0]);
    let t3 = performance.now();

    console.log("Total time taken O(1) : "+ (t3-t2));

        
   
}

findNemo(largeArray);