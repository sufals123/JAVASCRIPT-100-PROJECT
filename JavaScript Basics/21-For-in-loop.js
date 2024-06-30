const person = {
    namer : "john",
    gge : 19,
    gender: "male",
}

for(let key in person) {
    console.log(key);
    console.log(person[key]);
}