let sum = 0;
const sumOfDigits = (num)=>{
    num = (num.toString().split(""))
    num.forEach(e=>{
        sum = sum + parseInt(e)
        
    })
    return sum;
}

console.log(sumOfDigits(12345));