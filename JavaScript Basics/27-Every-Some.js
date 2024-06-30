const pepoles = ["safu","jone", "pepe", "Lix9"];
const rs = pepoles.every((p)=>{
    return p.length === 4
})

console.log(rs);

const char = ["abc", "def", "ghi"]
const Result = char.some((c)=>{
    return c.length === 3
})

console.log(Result);