
let stars = document.querySelectorAll(".fa-star");


let selectedRatingValue = document.querySelector(".selected-rating-value");


// stars.forEach((star, index) => {
//   star.addEventListener("click", ()=>{
//     selectedRatingValue.innerText = index + 1;
   
//     stars.forEach((star, ()=>{
//         star.classList.remove("fa-regular");
//         star.classList.add("fa-solid");
//     }))
     
//   })
// });

stars.forEach((star, index) => {
    star.addEventListener("click", () => {
    
        stars.forEach((s, i) => {
            
            if (i <= index) {
                
                s.classList.remove("fa-regular");
                s.classList.add("fa-solid");

            } else {
                
                s.classList.remove("fa-solid");
                s.classList.add("fa-regular");
            }
        });

        // Updating the selected rating value
        selectedRatingValue.textContent = index + 1;
    });
});






// <i class="fa-solid fa-star"></i>