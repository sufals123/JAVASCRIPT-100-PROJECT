const batteryIcon = document.querySelector('.battery-icon');

function chargeBattery()
{
        
    setTimeout(()=>{
        batteryIcon.innerHTML = `battery_1_bar`
    },1000);
    setTimeout(()=>{
        batteryIcon.innerHTML = `battery_2_bar`
    },2000)
    setTimeout(()=>{
        batteryIcon.innerHTML = `battery_3_bar`
    },3000)
    setTimeout(()=>{
        batteryIcon.innerHTML = `battery_4_bar`
    },4000)
    setTimeout(()=>{
        batteryIcon.innerHTML = `battery_5_bar`
    },5000)
    setTimeout(()=>{
        batteryIcon.innerHTML = `battery_6_bar`
    },6000)
    setTimeout(()=>{
        batteryIcon.innerHTML = `battery_full`
    },7000)
}

chargeBattery()
setInterval(chargeBattery,7000);