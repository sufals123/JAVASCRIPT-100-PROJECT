
const id= setInterval(()=>{
    console.log('hello');
},1000);

setTimeout(()=>{
    clearInterval(id);
    console.log('goodbye');
},5000);