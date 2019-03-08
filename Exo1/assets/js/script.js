var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
console.log(ctx);

ctx.fillStyle = "#AA6522";
ctx.beginPath();
ctx.moveTo(100, 100);
ctx.lineTo(200, 100);
ctx.lineTo(150, 250);
ctx.fill();

ctx.fillStyle = "#8A0908";
ctx.beginPath();
ctx.moveTo(100, 100);
ctx.quadraticCurveTo(160,1, 200, 100);
ctx.stroke();
ctx.fill();

