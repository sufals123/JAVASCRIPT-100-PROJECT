const colors = ["red", "green", "blue", "yellow"]
// for(let i=0; i<colors.length; i++){
//     console.log(colors[i]);
// }
colors.forEach(e=> console.log(e));

const num = ["one", "two", "three", "four", "five", "six"];
colors.forEach((word,index,arr)=>{
    console.log(word,index,arr);
    console.log(word.length);
    console.log(word.toUpperCase());
    console.log(word.toLowerCase());
    console.log(word[0]);
    console.log(word[1]);
    console.log(word[2]);
})