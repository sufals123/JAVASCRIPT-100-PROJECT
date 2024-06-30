const canvas = document.querySelector('.myCanvas');
const ctx = canvas.getContext('2d');

ctx.beginPath();
ctx.rect(100,100,200,200);
ctx.lineWidth = 10;
ctx.strokeStyle = 'yellow';

ctx.fillStyle = 'red';
ctx.fill();

ctx.stroke();
