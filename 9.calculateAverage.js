

const calculateAvarage = (arr)=>{
    return arr.reduce((accum, current)=>{
        return accum + current/arr.length;
    },0)
}


console.log(calculateAvarage([5,5,5]));