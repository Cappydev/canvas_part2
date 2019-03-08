var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
console.log(ctx);



ctx.fillStyle = "#FFF";
ctx.beginPath();
ctx.moveTo(100, 200);
ctx.quadraticCurveTo(200,150, 300, 200);
ctx.fill();

ctx.beginPath();
ctx.moveTo(100, 200);
ctx.quadraticCurveTo(200,250, 300, 200);
ctx.fill();

ctx.beginPath();
ctx.moveTo(150, 200);
ctx.quadraticCurveTo(200,90, 250, 200);
ctx.fill();
