
// const reverseString = (str)=>{
//    return str.split("").reverse().join("");
// }



const reverseString = (str)=>{
    // let arr = str.split("");
    // console.log(arr);
    let s = "";
    for(let i=str.length-1; i>=0; i--){
        s = s + str[i];
        
    }
    return s;
    

}

console.log(reverseString("hello"));