const  [a,...b] = ["one", "two", "three","four"]
console.log(a);
console.log(b);



const num = ["one", "two"];
const [x = 1, y = 2] = num;
const [red, green] = num;
console.log(red);
console.log(green);


const {s,r,...rest} = {s:100,r:200,c:300,d:400};
console.log(s);
console.log(r);
console.log(rest);

