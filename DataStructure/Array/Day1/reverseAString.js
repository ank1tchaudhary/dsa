function reverseString(str){
    const output=[];
    for (let index = str.length - 1 ; index >= 0; index--) {
        
        output[index]=str[index];
    }
    return output.join("");
}

console.log(reverseString("Ankit"));