// const arraysAreEqual = (a, b) => {
//     if (a.length !== b.length) {
//         return false;
//     }
//     for (let i = 0; i < a.length; i++) {
//         if (a[i] !== b[i]) {
//             return false;
//         }
//     }
//     return true; // If all elements are equal, return true
// }


const arraysAreEqual = (a, b) => {
    if(a.length !== b.length) {
        return false;
    }
    return a.every((curval,index)=>{
       return curval === b[index]
    })
}

console.log(arraysAreEqual([1, 2, 3], [1, 2, 3])); // Output: true
console.log(arraysAreEqual([1, 2, 3], [1, 2, 4])); // Output: false
