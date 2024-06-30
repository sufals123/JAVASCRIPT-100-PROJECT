
const findLoggerword = (str)=>{
    if(str.trim().length === 0){
        return false;
    }

    let words = str.trim().split(" ");
    let sort = words.sort((a,b)=>{
        return b.length - a.length;
        
    });
    // console.log(words);
    // console.log(sort);
    return sort[0];

    // return words.reduce((accum,curword)=>{
    //    return curword.length > accum.length ? curword : accum
    // })
}
console.log(findLoggerword("hello i am javascript programmer    "));