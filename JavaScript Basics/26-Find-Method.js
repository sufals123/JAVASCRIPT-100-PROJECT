const person = [

    {name: "Jone", age: 21},
    {name: "Jane", age: 22},
    {name: "John", age: 21},
    {name: "Mary", age: 24},
    {name: "Peter", age: 21},
    {name: "Sufal", age: 26},
]

const rs = person.find((e)=>e.name === "John");
console.log(rs);

