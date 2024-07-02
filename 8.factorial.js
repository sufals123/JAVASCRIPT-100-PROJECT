
let fact = 1;
const factorial = (x) => {

    for (let i = 1; i <= x; i++) {
        // console.log(i);
         fact = fact * i;
    }
    return fact;
}

const factorial = (num)=>{
    if(num === 0 || num === 1){
        return 1;
    }
    return num * factorial(num - 1);
}



console.log(factorial(5)); // Output will be 120
