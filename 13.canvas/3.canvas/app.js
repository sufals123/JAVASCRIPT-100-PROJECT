const canvas = document.querySelector('.myCanvas');
const ctx = canvas.getContext('2d');

ctx.beginPath();
ctx.rect(0,0,400,400);
ctx.fillStyle = 'blue';
ctx.fill();

ctx.beginPath();
ctx.rect(50,50,300,300);
ctx.fillStyle = 'white';
ctx.fill();

ctx.beginPath();
ctx.rect(100,100,200,200);
ctx.fillStyle = 'blue';

ctx.fill();

ctx.beginPath();
ctx.rect(150,150,100,100);

ctx.fillStyle = 'white';
ctx.fill();