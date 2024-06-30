// html section select
const cb = document.getElementById("show-hide")
const password = document.getElementById("upass")
// Click Event Handler
cb.addEventListener("click", ()=>{
    if(cb.checked == true){
        password.setAttribute("type","text")
    }else{
        password.setAttribute("type","password")
    }
})
