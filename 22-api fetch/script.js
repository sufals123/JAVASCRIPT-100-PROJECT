
let apiBtn = document.getElementById("btn")
let showData = document.getElementById("show")

const apiUrl = "https://icanhazdadjoke.com/"
const fetchDate = ()=>{
    const rs = fetch(apiUrl,{
        headers: {
            Accept: "application/json"
        }
    })
    .then((res)=>{
        console.log(res)
        return res.json()
    })
    .then((data)=>{
        console.log(data.joke)
        showData.innerText = data.joke
    })
    .catch((err)=>{
        console.log(err)
    })
    
}

fetchDate()


apiBtn.addEventListener("click",fetchDate)
