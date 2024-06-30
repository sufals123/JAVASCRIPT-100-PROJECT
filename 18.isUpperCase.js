

const isUpperCase = (char)=>{
    console.log(char.charCodeAt());
    if(char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 90){
        return true;
    }else{
        return false;
    }
}

const isLowerCase = (chare)=>{
    console.log(chare.charCodeAt());
    if(chare.charCodeAt(0) >= 97 && chare.charCodeAt(0) <= 122){
        return true;
    }else{
        return false;
    }
}

console.log(isUpperCase("S"));
console.log(isLowerCase("s"));