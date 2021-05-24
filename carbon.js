var canvas = document.querySelector('canvas');

var color = 'black';

canvas.width = document.getElementById("mc-right").offsetWidth;
canvas.height = document.getElementById("mc-right").offsetHeight;

var c = canvas.getContext('2d');

var rad = 50;
var screenWidth = document.getElementById("m-canvas").width;
var screenHeight = document.getElementById("m-canvas").height;

var posX = [screenWidth*0.5, screenWidth*0.1, screenWidth*(1-0.1), screenWidth*0.25, screenWidth*(1-0.25)];
var posY = [screenHeight*0.1, screenHeight*0.4, screenHeight*0.4, screenHeight*(1-0.1), screenHeight*(1-0.1)];

var offsetX1 = [-60, 60, -20, 20, 60, 20, 45, -45, -20, 60];
var offsetY1 = [30, 30, 60, 60, 0, 55, 40, 40, 55, 0];

var offsetX2 = [-7, -7, -8, -8, 0, -9, -7, -7, -9, 0];
var offsetY2 = [-7, 7, -4, 4, 9, 4.5, 7, -7, -2.5, 9];

var linesX_start = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var linesY_start = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var linesX_end = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var linesY_end = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

var ctr = 0;
var i;
for (i = 0; i < 5; i++) {
  var j;
  for(j = 0; j < 5; j++) {
    if(j > i) {
      
      c.beginPath();
      c.lineWidth = 3;
      linesX_start[ctr] = posX[i] + offsetX1[ctr] + offsetX2[ctr];
      linesY_start[ctr] = posY[i] + offsetY1[ctr] + offsetY2[ctr];
      linesX_end[ctr] = posX[j] - offsetX1[ctr] + offsetX2[ctr];
      linesY_end[ctr] = posY[j] - offsetY1[ctr] + offsetY2[ctr];
      c.moveTo(linesX_start[ctr], linesY_start[ctr]);
      c.lineTo(linesX_end[ctr], linesY_end[ctr]);
      c.strokeStyle = "#aaaaaa";
      c.stroke();
      c.closePath();
      
      c.beginPath();
      c.lineWidth = 3;
      linesX_start[ctr + 10] = posX[i] + offsetX1[ctr] - offsetX2[ctr];
      linesY_start[ctr + 10] = posY[i] + offsetY1[ctr] - offsetY2[ctr];
      linesX_end[ctr + 10] = posX[j] - offsetX1[ctr] - offsetX2[ctr];
      linesY_end[ctr + 10] = posY[j] - offsetY1[ctr] - offsetY2[ctr];
      c.moveTo(linesX_start[ctr + 10], linesY_start[ctr + 10]);
      c.lineTo(linesX_end[ctr + 10], linesY_end[ctr + 10]);
      c.strokeStyle = "#aaaaaa";
      c.stroke();
      c.closePath();
      
      ctr++;
    }
  }
}

for (i = 0; i < 5; i++) {
  c.beginPath();
  var posx_curr = posX[i];
  var posy_curr = posY[i];
  c.arc(posx_curr, posy_curr, rad, 0, 2 * Math.PI);
  c.fillStyle = color;
  c.fill();
  c.closePath();
}

var z = 25;

var k;
for(k = 0; k < 10; k++) {
  
  var a1 = linesX_start[k];
  var b1 = linesY_start[k];
  var c1 = linesX_end[k];
  var d1 = linesY_end[k];
  
  if(a1 > c1) {
    var x1fac = 1;
    var y1fac = -1;
    var x2fac = 1;
    var y2fac = -1; 
  } else {
    var x1fac = -1;
    var y1fac = -1;
    var x2fac = -1;
    var y2fac = -1; 
  }
  
  var theta = Math.atan(Math.abs((d1-b1)/(c1-a1)));
  var x1 = c1 + x1fac*(Math.sin(1.0472-theta)*z*Math.tan(0.5236));
  var y1 = d1 + y1fac*(Math.cos(1.0472-theta)*z*Math.tan(0.5236));
  var x2 = c1 + x2fac*(Math.cos(theta-0.5236)*z*Math.tan(0.5236));
  var y2 = d1 + y2fac*(Math.sin(theta-0.5236)*z*Math.tan(0.5236));
  
  c.beginPath();
  c.moveTo(x1, y1);
  c.lineTo(c1, d1);
  c.lineTo(x2, y2);
  c.lineTo(x1, y1);
  c.fillStyle = "#aaaaaa";
  c.fill();
  c.closePath();  
  
  a1 = linesX_end[k + 10];
  b1 = linesY_end[k + 10];
  c1 = linesX_start[k + 10];
  d1 = linesY_start[k + 10];
  x1fac = x1fac*-1;
  y1fac = y1fac*-1;
  x2fac = x2fac*-1;
  y2fac = y2fac*-1;
  
  theta = Math.atan(Math.abs((d1-b1)/(c1-a1)));
  x1 = c1 + x1fac*(Math.sin(1.0472-theta)*z*Math.tan(0.5236));
  y1 = d1 + y1fac*(Math.cos(1.0472-theta)*z*Math.tan(0.5236));
  x2 = c1 + x2fac*(Math.cos(theta-0.5236)*z*Math.tan(0.5236));
  y2 = d1 + y2fac*(Math.sin(theta-0.5236)*z*Math.tan(0.5236));
  
  c.beginPath();
  c.moveTo(x1, y1);
  c.lineTo(c1, d1);
  c.lineTo(x2, y2);
  c.lineTo(x1, y1);
  c.fillStyle = "#aaaaaa";
  c.fill();
  c.closePath();

  
}


//canvas.onmouseover = function(e) {
//  c.arc(posx5, posy5, rad, 0, 2 * Math.PI);
//  c.fillStyle = 'blue';
//  c.fill();
//}

//canvas.onmouseleave = function(e) {
//  c.arc(posx5, posy5, rad, 0, 2 * Math.PI);
//  c.fillStyle = color;
//  c.fill();
//}