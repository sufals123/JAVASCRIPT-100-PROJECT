// select hex-color button 
const hexButton = document.querySelector(".hex-button");
const hexColorValue = document.querySelector(".hex-value");
const hextColorContainer = document.querySelector(".hex-color")
const copy = document.querySelector(".hex-copy--button")

hexButton.addEventListener("click", () => {
    myHexaValues = "0123456789abcdef";
    color = "#";

    for (let i = 0; i < 6; i++) {
        color += myHexaValues[Math.floor(Math.random() * 16)];
    }
    
    hexColorValue.textContent = color; 
    hextColorContainer.style.backgroundColor = color;
    hexButton.style.backgroundColor = color;
});

///////////////////////////////////////////////////////////////////////////////////

// select rgb-color button & input
let redId = document.getElementById("red");

let greenId = document.getElementById("green");

let blueId = document.getElementById("blue");

let rgbButton = document.querySelector(".rgb-button");

let rgbContainer = document.querySelector(".rgb-color")

rgbButton.addEventListener("click", ()=>{
    let red = redId.value
    let green = greenId.value
    let blue = blueId.value

    console.log(red)
    console.log(green)
    console.log(blue)

    rgbContainer.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`
    rgbButton.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`  

})

///////////////////////////////////////////copy color //////////////




function copyHexColorToClipBoard(){
    console.log(hexColorValue.textContent)
    
    navigator.clipboard.writeText(hexColorValue.textContent)
}
function copyRGBColorToClipBoard(){
    
}

copy.addEventListener("click", copyHexColorToClipBoard)