let btn1 = document.getElementById("myButton")
let btn2 = document.getElementById("myButton2")
let copyDiv = document.querySelector(".copyCode")
let rgb1 = "rgb(92,145,299)"
let rgb2 = "rgb(152,63,198)"

// 0,1,2,3,4,5,6,7,8,9,A,B,C,D,E,F   form -- (#RRGGBB)

const hexValues = () =>{
    let myHexaValues = "0123456789abcdef"
    let color = "#"
    
    for(let i = 0; i < 6; i++){       
        color = color + (myHexaValues[Math.floor(Math.random() * 16)])
    }
    return color
}



const handleButton1 = () =>{
    rgb1 = hexValues();
    btn1.innerText = rgb1;
    console.log(rgb1);

    document.body.style.backgroundImage = `linear-gradient(to right, ${rgb1} , ${rgb2})`
    copyDiv.innerHTML = `background-img: linear-gradient(to right,${rgb1},${rgb2})`
}
const handleButton2 = () =>{
    rgb2 = hexValues();
    btn2.innerText = rgb2
    console.log(rgb2);

    document.body.style.backgroundImage = `linear-gradient(to right, ${rgb1} , ${rgb2})`
    copyDiv.innerHTML = `background-img: linear-gradient(to right,${rgb1},${rgb2})`
}




btn1.addEventListener("click",handleButton1);
btn2.addEventListener("click",handleButton2)

copyDiv.addEventListener("click", () =>{
    navigator.clipboard.writeText(copyDiv.innerText)
    alert("copy code")
});