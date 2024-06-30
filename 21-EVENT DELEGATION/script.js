
// const callJavaScript = (event) =>{
//     document.getElementById("listValue").innerHTML = event.target.textContent;
// }

// const callReact = () =>{
//     document.getElementById("listValue").innerHTML = event.target.textContent;
// }

// const callNext = () =>{
//     document.getElementById("listValue").innerHTML = event.target.textContent;
// }

// const callHtmal = () =>{
//     document.getElementById("listValue").innerHTML = event.target.textContent;
// }

// document.getElementById("JavaScript").addEventListener("click",callJavaScript)
// document.getElementById("React").addEventListener("click",callReact)
// document.getElementById("Next").addEventListener("click",callNext)
// document.getElementById("HTML").addEventListener("click",callHtmal)




const getListValue = (event) =>{
    document.getElementById("listValue").innerHTML = event.target.textContent
}
document.getElementById("myList").addEventListener("click",getListValue);