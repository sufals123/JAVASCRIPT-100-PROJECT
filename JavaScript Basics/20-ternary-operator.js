const password = 8;

// function checkPassword(password) {
//     if(password === 8){
//         return true;
//     }else{
//         return false;
//     }
// }

function checkPassword(password) {
    return password === 8 ? true : false;
}

const result = checkPassword(password);
console.log(result);