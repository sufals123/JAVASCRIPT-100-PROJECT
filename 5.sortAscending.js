

const sortAscending = (arr)=>{
    return arr.sort((a,b)=>{
        return a - b;
    });


}


console.log(sortAscending([6,5,3,2,10,1]));