function sayHello(name){
    return `Hello ${name}`
}
// console.log(sayHello("sufal"))
let fun = sayHello;
console.log(fun("sufal"))



//Higher-order Function..callback function..

function processUserInput(name,callback){
    console.log(`userInput ${name}`)
    callback(name)
}

function greetUser(name){
    console.log(`user hello ${name}`)
}

processUserInput("sufal",greetUser)
////////////////////////////////////////////////////////////////////

const mathOperation = (a,b,oppration) =>{
    return oppration(a,b)
}

const add = (a,b) =>{
    return a + b
}

const sub = (a,b) =>{
    return a-b
}

const mul = (a,b) =>{
    return a*b
}



console.log(mathOperation(1,2,add))
console.log(mathOperation(1,2,sub))
console.log(mathOperation(1,2,mul))


///////////////////////////////////////////////////////////////////


//////CallBack Hell ???/////////////

// const getStudentData = () =>{
//     console.log("inside getStudentData")
//     setTimeout(()=>{
//         console.log("inside setTimeout")
//         setTimeout(() =>{
//             console.log("inside second setTimeout")
//             setTimeout(() =>{
//                 console.log("inside third setTimeout")
//                 setTimeout(() =>{
//                     console.log("inside fourth setTimeout")
//                     setTimeout(() =>{
//                         console.log("inside fifth setTimeout")
//                     },1000)
//                 },1000)
//             },1000)
//         },1000)
//     },1000)
// }


// getStudentData();


// Promises in javaScript/////


// const pr = new Promise((resolve, reject) =>{
//     setTimeout(()=>{
//         resolve("ok")
//     },2000);
// })
// .then((resolve) =>{
//     console.log(resolve)
// }) 
// .catch(error =>{
//     console.log(error)
// })
// .finally(()=>{
//     console.log("finally")
// })




const studentName = "Sufal";
const enrollmentStudent = (studentName) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > 0.5) {
                resolve(`student name enrollment: ${studentName}`);
            } else {
                reject(`student name not enrolled: ${studentName}`);
            }
        }, 2000);
    });
};

enrollmentStudent(studentName)
    .then((result) => {
        console.log(result);
    })
    .catch((err) => {
        console.log(err);
    })
    .finally(() => {
        console.log("Enrollments is completed...");
    });
///////////////////////////////////////////////////

const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("First");
    }, 100);
});

// const promise2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("Second");
//     }, 5000);
// });

const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("Faild to");
    }, 5000);
});

const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Third");
    }, 2000);
});




// Promise.all([promise1, promise3, promise2, ])
// .then((values) =>{
//     console.log(values);
// })
// .catch((err) =>{
//     console.log(err);
// });





// Promise.allSettled([promise1,promise2,promise3])
// .then((values) =>{
//     console.log(values);
// })
// .catch((err) =>{
//     console.log(err);
// });


Promise.race([promise1,promise2,promise3])
.then((values) =>{
    console.log(values)
})
.catch((err) =>{
    confirm(err);
})




