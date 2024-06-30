const hr = document.querySelector(".hour")
const me = document.querySelector(".minute")
const se = document.querySelector(".second")

const updateTime = ()=>{
    let date = new Date();
    hr.innerHTML = date.getHours();
    me.innerHTML = date.getMinutes();
    se.innerHTML = date.getSeconds();
}

setInterval(updateTime,1000)