

const powerOfTwo = (power)=>{
    
   let result = 1;
   while(result < power){
    result *= 2;
   }

   return result === power? true : false;
}


// const powerOfTwo = (poiwer)=>{
//     return Math.log2(poiwer) % 1 === 0? true : false;
// }


// const powerOfTwo = (power)=>{


//     let rs = false;

//     for(let i = 0; i < power; i++){
//         if(2**i === power){
//             rs = true;
            
//         }
//     }
//     return rs;
// }

console.log(powerOfTwo(8)) // true 2*2*2 = 8