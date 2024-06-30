

// const AvarageMiddleNum = (num)=>{
//     let arr = num.length;
//     if(arr % 2 === 0){
//         for(let i = 0; i<arr; i++){
//             console.log(num[i]);
//         }
//         for(let i = arr; i >= 0; i--){
//             console.log(num[i]);
//         }
//     }else{
//         for(let i=0; i<arr; i++){
//             console.log(num[i]);
//         }
//         for(let i = arr; i >= 0; i--){
//             console.log(num[i]);
//         }
//     }
// }


const AvarageMiddleNum = (num)=>{
    let arr = num.sort((a,b)=>{
        return a-b;
    })

    let length = arr.length;
    let mid = Math.floor(length /2 )
    console.log(mid);


    if(length % 2 === 0){
        return (num[mid]  + num[mid + 1]) /2;
    }else{
        return num[mid]/2;
    }


}


console.log(AvarageMiddleNum([3,2,3,1]))