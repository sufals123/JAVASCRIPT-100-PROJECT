

const findMin = (num)=>{
    return Math.min(...num);
}


// const findMin = (num)=>{
//     return num.reduce((accu,current)=>{
//         return accu < current? accu : current;
//     })
// }

// const findMin = (num)=>{
//    arr = num.sort((a,b)=>{
//         if(a<b) return -1;
//     });
//     return arr[0]
// }




console.log(findMin([-5,10,11,2,7,4,]))