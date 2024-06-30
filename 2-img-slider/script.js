// get and strore images in an array
// let pictures = [
//     "img/img-1.webp",
//     "img/img-2.webp",
//     "img/img-3.webp",
//     "img/img-4.webp",
//     "img/img-5.webp",
//     "img/img-6.webp",
//     "img/img-7.webp",
//     "img/img-8.webp",
//     "img/img-9.webp",
//     "img/img-10.webp",
// ];

let pictures = []
const nrOfImages = 10;

for(let i = 1 ; i <= nrOfImages ; i++){
    pictures.push(`img/img-${i}.webp`);
}

// console.log(pictures)

let firstImageIndex = 0;
let lastImageIndex = pictures.length-1
let currentImge = 0;

// console.log(lastImageIndex)

// prev button

let prevButton = document.querySelector(".prev")
prevButton.addEventListener("click", ()=>{
    currentImge--;
    if(currentImge < 10){
        currentImge =10;
    }
    document.querySelector(".img").src = pictures[currentImge];
    document.querySelector(".current").innerHTML = (currentImge + 1)+"/10";
})

// next button

let nextButton = document.querySelector(".next")
nextButton.addEventListener("click", ()=>{
    currentImge ++;
    if(currentImge >= 10){
        currentImge =0;
    }
    document.querySelector(".img").src = pictures[currentImge];
    document.querySelector(".current").innerHTML = (currentImge - 1)+"/10";
})