


// const sumOfSquares =(num)=>{
//     return num.reduce((accu, current)=>{
//         return accu + (current * current);
//     },0)
// }


// const sumOfSquares = (num)=>{
//     let sum = 0;
//     num.forEach(e=>{
//         sum += e * e;     
//     })
//     return sum;
// }


const sumOfSquares = (num)=>{
    let sum = 0;
    for(let elme of num){
        sum = elme * elme + sum
    }
    return sum;
}

console.log(sumOfSquares([1, 2, 3]));