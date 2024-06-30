let inputFiled = document.getElementById("inputFiled")
let pDisplay = document.getElementById("display")
let content = document.querySelector(".displayContainer")


let addPoint = () =>{
    console.log(inputFiled.value)
    let p = document.createElement("p")

    p.textContent = inputFiled.value

    content.append(p);


}


let buttonClick = document.querySelector(".btn")


buttonClick.addEventListener('click', () =>{
    addPoint();
})

content.addEventListener('click', (event) =>{
    console.log(event.target)
    let currentElement = event.target
    currentElement.remove()
})