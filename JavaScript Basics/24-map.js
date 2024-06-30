const num = [1, 2, 3, 4];
const result = num.map((num)=>{
    return num * 2;
});
console.log(result);

const colors = ["red", "green", "blue", "yellow",];
const rs = colors.map((col)=>{
    console.log(col.replace());
    return col.toUpperCase();
})

console.log(rs);
const person = {
    name: 'John',
    age: 19,
    job: 'programmer'
};

const LS = Object.entries(person).map(([key, value]) => {
    console.log(key + ": " + value);
    return value;
});



