var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');

//E
ctx.beginPath();
ctx.fillStyle = "#3c3c3c";
ctx.moveTo(135,136);//1
ctx.lineTo(320,136);//2
ctx.lineTo(305,159);//3
ctx.lineTo(159,159);//4
ctx.lineTo(136,286);//5
ctx.lineTo(288,286);//6
ctx.lineTo(283,310);//7
ctx.lineTo(132,310);//8
ctx.lineTo(108,446);//9
ctx.lineTo(283,446);//10
ctx.lineTo(278,469);//11
ctx.lineTo(77,469);//12
ctx.lineTo(135,136);//13
ctx.fill();

//2
ctx.beginPath();
ctx.fillStyle = "#e84e1c";
ctx.moveTo(293,200);//1
ctx.quadraticCurveTo(338,98,440,31);//2
ctx.quadraticCurveTo(510,-12,582,30);//3
ctx.quadraticCurveTo(700,110,586,282);//4
ctx.quadraticCurveTo(410,500,186,616);//5
ctx.quadraticCurveTo(380,570,421,625);//7
ctx.quadraticCurveTo(430,630,437,657);//8
ctx.quadraticCurveTo(320,660,140,705);//9
ctx.quadraticCurveTo(120,710,114,705);//10
ctx.quadraticCurveTo(90,695,70,640);//11
ctx.quadraticCurveTo(288,495,463,317);//12
ctx.quadraticCurveTo(590,175,590,100);//13
ctx.quadraticCurveTo(577,21,502,57);//14
ctx.quadraticCurveTo(450,85,366,211);//15
ctx.quadraticCurveTo(320,265,272,252);//16
ctx.fill();

//N gauche
ctx.beginPath();
ctx.fillStyle = "#323232";
ctx.moveTo(591,287);//1
ctx.quadraticCurveTo(613,261,633,215);//2
ctx.lineTo(590,458);//3
ctx.lineTo(562,458);//4
ctx.lineTo(591,288);//5
ctx.fill();

//N centre et gauche
ctx.beginPath();
ctx.fillStyle = "#323232";
ctx.moveTo(650,130);//1
ctx.lineTo(784,410);//2
ctx.lineTo(834,124);//3
ctx.lineTo(862,124);//4
ctx.lineTo(804,457);//5
ctx.lineTo(777,457);//6
ctx.lineTo(644,180);//7
ctx.quadraticCurveTo(649,160,650,130);//2
ctx.fill();

//Texte
ctx.font = "50pt 'Roboto', sans-serif";
ctx.fillStyle = "#5b5b5b";
ctx.fillText("École du Numérique", 545, 571);
ctx.font = "50pt 'Roboto', sans-serif";
ctx.fillStyle = "#5b5b5b";
ctx.fillText("du Noyonnais", 527, 655);

//Polygones grand 1
ctx.beginPath();
ctx.fillStyle = "#dbd7d8";
ctx.moveTo(1042,102);//1
ctx.lineTo(1085,132);//2
ctx.lineTo(1082,183);//3
ctx.lineTo(1035,206);//4
ctx.lineTo(992,178);//5
ctx.lineTo(996,124);//6
ctx.lineTo(1042,102);//7
ctx.fill();

//Polygones grand 1
ctx.beginPath();
ctx.fillStyle = "#dbd7d8";
ctx.moveTo(1042,102);//1
ctx.lineTo(1085,132);//2
ctx.lineTo(1082,183);//3
ctx.lineTo(1035,206);//4
ctx.lineTo(992,178);//5
ctx.lineTo(996,124);//6
ctx.lineTo(1042,102);//7
ctx.fill();


