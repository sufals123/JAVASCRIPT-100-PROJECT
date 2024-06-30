let numberofHeart = 0
window.addEventListener("load", ()=>{
   let id =  setInterval(()=>{
                    
            let heartElement = document.createElement('i');
            heartElement.classList.add('fa-solid');
            heartElement.classList.add('fa-heart');
            document.body.appendChild(heartElement);

            // body width & height
            let w = window.innerWidth - 50;
            let h = window.innerHeight -50

            // console.log(w)
            // console.log(h)

            let left_ = Math.floor(Math.random() * w);
            let top_ = Math.floor(Math.random() * h);

            heartElement.style.top = top_ + 'px';
            heartElement.style.left = left_ + 'px';
                numberofHeart++;
                if(numberofHeart == 100){
                    clearInterval(id);
                }

                },100)
})


// create heart icon element
/* <i class="fa-solid fa-heart"></i> */

