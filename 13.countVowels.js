let vowels = ["a", "e", "i", "o", "u"];
let count = 0;
// const countVowels = (str) => {
//     str = str.toLowerCase();
//     for(let i = 0; i < str.length; i++) {
//         for(let v of vowels){
//             if(str[i] === v) {
//                 count += 1;
//             }
//         }
//     }
//     return count;
// }


// const countVowels = (str) => {
//     str = str.toLowerCase();
//     let arr = str.split("");
    
//     for(let char of arr){
//         if(vowels.includes(char)){
//             count += 1;
//         }
//     }
//     return count;
// }


const countVowels = (str) => {
    str = str.toLowerCase();
    let arr = str.split("");

    return arr.reduce((accum, current)=>{
        return accum + (vowels.includes(current)? 1 : 0);
    },0)
}

console.log(countVowels("aeio"));