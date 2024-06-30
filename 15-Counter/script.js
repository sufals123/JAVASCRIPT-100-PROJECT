// html section seletor
const count = document.querySelector(".count")
const up = document.querySelector(".up")
const reset = document.querySelector(".reset")
const down = document.querySelector(".down")

// Click handlers
const lowerLimit = 0;
const upperLimit = 10;
let realCountt = 0;
up.addEventListener("click", ()=>{
    setInterval(()=>{
        if(realCountt <= upperLimit-1){
            clearInterval();
            realCountt++;
            count.innerHTML = realCountt;
        }
    
    },1000)
})
reset.addEventListener("click", ()=>{
   realCountt = 0;
   count.innerHTML = realCountt;
})
down.addEventListener("click", ()=>{
    setInterval(()=>{
        if(10 > lowerLimit){
            realCountt--;
            count.inne
            
            
            
        }
    },1000)
})