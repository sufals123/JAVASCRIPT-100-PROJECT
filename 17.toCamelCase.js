

const toCamelCase = (value)=>{
    value = value.trim().split(" ");
    // console.log(value);

    value=value.map((currentElement, index)=>{
        if(index === 0){
            return currentElement.toLowerCase();
        }else{
            return currentElement.charAt(0).toUpperCase() + currentElement.slice(1).toLowerCase();
        }
    })
    return value.join(" ");
}


console.log(toCamelCase("hello worLd i loVe JaVaScRiPt"));