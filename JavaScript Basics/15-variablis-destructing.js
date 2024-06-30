let a,b;
function f1(){
    return [a,b];
}
[a=5, b=6] = f1();
console.log(a);
console.log(b);



const colors = ["red", "green", "blue", "yellow"];
const [one, two] = colors;
console.log(one);
console.log(two);



