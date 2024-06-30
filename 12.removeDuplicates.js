
// const removeDuplicates = (arr)=>{
//     return arr.filter((item,index,array)=>{
//         return array.indexOf(item) === index;
//     })
// }


const removeDuplicates = (arr)=>{
    let newArr = [...new Set(arr)]
       return newArr;
    
}


console.log(removeDuplicates([9,9,2,2,3,5,6,6,7]))