// const hello = {
//     sum: function(a,b){
//         return a+b;
//     },
//     mul: function(a,b){
//         return a*b;
//     }
// }

// console.log(hello.sum(2,3));
// console.log(hello.mul(2,3));

// const hello = {
//     sum: ((a,b)=>{
//         return a+b;
//     }),
//     mul: ((a,b)=>{
//         return a*b;
//     })
// }

// console.log(hello.sum(2,3));
// console.log(hello.mul(2,3));

const hello = {
    sum: (a,b)=> a+b,
    mul: (a,b)=> a*b
}

console.log(hello.sum(2,3));
console.log(hello.mul(2,3));