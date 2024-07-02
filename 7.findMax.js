

const findMax = (max)=>{
    
 return max.reduce((accum, current)=>{
     return accum > current? accum : current;
 })
}


// const findMax = (arr) => {
//     return Math.max(...arr);
// }

const findMax = (arr)=>{
    let max = arr[0];
    for(let i=1; i < arr.length; i++){
        if(arr[i] > max){
            max = arr[i];

        }

    }
    return max;
}


console.log(findMax([1,0,3,8,5,6,9,2]))
console.log(findMax([-2,-3,-4,-5,-1,-7,-8]))

