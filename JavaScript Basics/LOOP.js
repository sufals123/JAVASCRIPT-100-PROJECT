var temperature = 21;
if(temperature > 25){
    console.log("go to beach")
}else if(temperature > 20){
    console.log("ok")
}else{
    console.log("cold")
}



let userAge=22;
let isCitizen = false;
let isRegister = true;

if(userAge => 18){
    if(isCitizen){
        if(isRegister){
            console.log("OK........")
        }else{
            console.log("First register...")
        }
    }else{
        console.log("apply to citizen ....from")
    }
}else{
    console.log("Your are not eligible..")
}


var day= "Monday";

switch(day){
    case "Monday":
        console.log("to day is monday");
        break;
    
    case "Friday":
        console.log("Today is paty time")
        break;

    case "Sunday":
        console.log("Todai movie time")
        break;

    default:
        console.log("Not match ...")    

}


var areaOfShape = "regtangluer";
var a = 10;
var b = 5;
var result;
switch(areaOfShape){
    case "regtangluer":
        result = a * b;
        console.log(result)
        break

    case "square":
        result = a * a;
        console.log(result); 
        break

    case "circel":
        var r = 2;
        result = (3.143 *(2*2));
        console.log(result) 
        break   
}


var i = 1

while(i <= 10){
    console.log(i);
    i++
}

var i =1
while(i <=10){
    console.log("5 * " +i+ "= " + (i*5))
    i++
}

for (let i = 10; i >= 0; i--) {
    console.log(i);
}


let sum = 0;
for(let num = 1; num <= 10; num++){
    sum = sum + num;
}
console.log(sum);

var roll = 13;

for(i=1; i <= roll; i++){
    if(roll % 2 == 0){
        console.log("not prime")
    }else{
        console.log(" prime")
    }
}

var year = 2024;
if((year % 4 == 0 && year % 100 != 0) || year % 400 ==0){
    console.log("leap year")
}else{
    console.log("not leap year")
}

const str = "jones";
[...str].forEach((e)=>{
    console.log(e);
})

// 
for(const s of str){
    console.log(s);
}
console.log(">>>>>>>.......>>>>>>>>")
const arr = [1,2,3,4,5,6,7,8,9,10];
for(const a in arr){
    console.log(a);
}

