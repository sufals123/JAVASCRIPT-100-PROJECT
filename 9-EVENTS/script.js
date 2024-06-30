document.getElementById("myBtn").onclick = () =>{
    alert("Hello sufal...")
}

// document.getElementById("myBtn").onclick = function () {
//     alert("Hello")
// }

document.getElementById("myBtn1").onmouseover = () =>{
    alert("welcome again")
}


// document.getElementById("myBtn2").addEventListener("click", function() {
//     alert("Hello")
// })

document.getElementById("myBtn2").addEventListener("click", () =>{
    alert("NOW")
})

document.getElementById("myBtn3").addEventListener("mouseover", () =>{
    alert("again welcome")
})

///////////////////////////////////////////////////////////

// Get the div and button
let rectDiv = document.querySelector(".rectangle");
let myButton = document.getElementById("myButton");

const handleMouseEvent = () => {
    console.log("dblclick");
    rectDiv.style.backgroundColor = "green"; 
};
const handleMouseEvent1 = () => {
    console.log("dblclick");
    rectDiv.style.backgroundColor = "yellow"; 
};
const handleMouseEvent2 = () => {
    console.log("dblclick");
    rectDiv.classList.add("addTransition")
};
const handleMouseEvent3 = () => {
    console.log("dblclick");
    rectDiv.classList.add("addTransition1")
};

myButton.addEventListener("dblclick", handleMouseEvent);
myButton.addEventListener("click", handleMouseEvent1)
myButton.addEventListener("mousemove", handleMouseEvent2)
myButton.addEventListener("mouseout",handleMouseEvent3)

///////////////////////////////////////////////////////////////////////////

const handleKeyPress = (event) =>{
    console.log(event)

    console.log("Key Pressed:",event.key);
    console.log("key code:",event.code);
    console.log("Event Type:",event.type)

    document.querySelector(".keyPressed").textContent = `Key pressed: ${event.key}`
    document.querySelector(".keyCode").textContent = `key code: ${event.code}`
    document.querySelector(".charCode").textContent = `Char codeAt: ${event.key.charCodeAt(0)}`
    document.querySelector(".eventType").textContent = `Event type: ${event.type}`

}
 

let myInput = document.getElementById("myInput")
myInput.addEventListener("keydown",handleKeyPress)

k
