// const canvas = document.querySelector('.myCanvas');
// const ctx = canvas.getContext('2d');

// const thickness = 20;
// let x = 0, y = 0, w = 400, h = 400;



// let i = 1;
// while (i <= 10) {
//     ctx.beginPath();
//     ctx.rect(x, y, w, h);
   
//     if(i%2){
//         ctx.fillStyle = 'blue';
//     }else{
//         ctx.fillStyle ='white';
//     }
//     ctx.fill();
//     x += thickness;
//     y += thickness;
//     w = w -  thickness - thickness;
//     h -= h -  thickness - thickness;
//     i++;
// }

const canvas = document.querySelector('.myCanvas');
const ctx = canvas.getContext('2d');

const thickness = 20;
let x = 0, y = 0, w = 400, h = 400;

let i = 1;
while (i <= 10) {
    ctx.beginPath();
    ctx.rect(x, y, w, h);
   
    if (i % 2) {
        ctx.fillStyle = 'blue';
    } else {
        ctx.fillStyle = 'white';
    }
    ctx.fill();
    
    x += thickness;
    y += thickness;
    w -= 2 * thickness;
    h -= 2 * thickness;
    
    i++;
}

