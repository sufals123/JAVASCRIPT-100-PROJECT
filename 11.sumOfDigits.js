let sum = 0;
const sumOfDigits = (num)=>{
    num = (num.toString().split(""))
    num.forEach(e=>{
        sum = sum + parseInt(e)
        
    })
    return sum;
}


// const sumOfDigits = (value)=>{
//     return value.toString().split('').reduce((acc, val) => acc + parseInt(val), 0);
 
// }

console.log(sumOfDigits(12345));
