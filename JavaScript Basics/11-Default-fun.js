
function countTo5 (count = false){
    if(count === true){
        for(let i = 0; i < 5; i++){
            console.log(`count: ${i}`);
        }
    }
}

countTo5(true);