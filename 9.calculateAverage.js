

const calculateAvarage = (arr)=>{
    return arr.reduce((accum, current)=>{
        return accum + current/arr.length;
    },0)
}


const calculateAvarage = (arr) =>{
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        sum = sum + arr[i];
        
    }
    return sum / arr.length;
}

console.log(calculateAvarage([5,5,5]));
