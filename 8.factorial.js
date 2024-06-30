
let fact = 1;
const factorial = (x) => {

    for (let i = 1; i <= x; i++) {
        // console.log(i);
         fact = fact * i;
    }
    return fact;
}
console.log(factorial(5)); // Output will be 120
