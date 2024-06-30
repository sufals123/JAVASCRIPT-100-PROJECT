const canvas = document.querySelector('.myCanvas');
const ctx = canvas.getContext('2d');

ctx.beginPath();
const x=200, y=200, r=50;
ctx.arc(x,y,r,0,Math.PI*2);
ctx.fillStyle = 'white';
ctx.fill();

ctx.beginPath();
const r2=r*0.8, x2=x, y2=y-r-r2;
ctx.arc(x2,y2,r2,0,Math.PI*2);
ctx.fill();

ctx.beginPath();

const r3=r2*0.8, x3=x2, y3=y2-r2-r3;

ctx.arc(x3,y3,r3,0,Math.PI*2);
ctx.fill();