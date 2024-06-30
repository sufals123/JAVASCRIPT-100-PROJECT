// const countChar = (str, char) => {

//     str = str.toLowerCase().split("");
//     char = char.toLowerCase();

//     let count = 0;
//     for (let s of str) {
//         if(s === char) {
//             count += 1;
//         }
//     }
//     return count;

   
// };


// const countChar = (str, char)=>{
//     str = str.toLowerCase().split("");
//     char = char.toLowerCase();

//     return str.reduce((accum, current)=>{
//         return accum + (current === char ? 1 : 0);
//     },0)
// }


const countChar = (str, char)=>{
    return str.toLowerCase().split("").reduce((accum, current)=>{
        if(current === char){
            accum++;
        }
        return accum;
    },0)
}


console.log(countChar("javascript", "a"));


