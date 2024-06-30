
const startWith = (str, start) =>{
    str = str.split(" ");
    str = (str[0].toLowerCase());

    start = start.toLowerCase();
    
    if(str === start){
        return true;
    }else{
        return false;
    }
}

// const startWith = (str, start) =>{
//     return str.toLowerCase().startsWith(start.toLowerCase());
// }

console.log(startWith("Hello world", "hello"));
console.log(startWith("Hello world", "world"));
