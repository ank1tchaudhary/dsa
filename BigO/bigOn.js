const nemo= ['nemo'];
const largeArray = new Array(100).fill('nemo');

function findNemo(input){

    console.log("================Big O(n)[Linear Curve]============")
    //No. of operation will increse when no. of input increses, irrespective of infrastructure.
    let t0 = performance.now();

    for (let i = 0; i < input.length; i++) {
        if (input[i] === 'nemo') {
            console.log('Found '+ input[i]);
        }
        
    }

    let t1 = performance.now();
    console.log("Total time taken O(n) : "+ (t1-t0));

}

findNemo(largeArray);