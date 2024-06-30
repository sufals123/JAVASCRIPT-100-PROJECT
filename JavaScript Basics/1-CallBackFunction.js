

// function hello(name,fun){
//     console.log("hello my name" + name);
//     fun();
// }


// hello("zhangsan",function ok(){
//     console.log("ok");
// }
// );

// function sayHello(fun){
//     let value = 10;
//     fun(value);
// }

// sayHello(function(value){
//     console.log(value);
// });



function sum(a, b) {
    return a + b;
}

function calculator(a, b, sumCallback) {
    return sumCallback(a, b);
}

console.log(calculator(1, 2, sum));

