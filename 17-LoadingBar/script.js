let minWidth = 0;
let maxWith = 100;

window.addEventListener("load", ()=>{

    let id = setInterval(()=>{
        minWidth++;
        document.querySelector(".loading-bar").innerHTML = `Loading ${minWidth}%`;
        document.querySelector(".bar").style.width = `${minWidth}%`;

        if(minWidth == maxWith){
            clearInterval(id);
            document.querySelector(".loading-bar").innerHTML = `Loading Done`;
            document.querySelector(".bar").style.backgroundColor = `orange`;
        } 
        
    },100)

    
})