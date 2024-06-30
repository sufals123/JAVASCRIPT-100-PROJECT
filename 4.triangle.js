// if all three sides are of equaln length return "equilateral"..... 
// if only two sides are of equal length return "isosceles".......
// is all tree sides different length return "scalene"..........



const chechTriangle = (a,b,c)=>{
    if(a === b && b === c) return "equilateral";
    if(a === b || b === c || a === c) return "isosceles";
    return "scalene";
}


console.log(chechTriangle(3,3,3))  // equilateral

console.log(chechTriangle(3,3,4))  // isosceles

console.log(chechTriangle(3,4,5))  // scalene
