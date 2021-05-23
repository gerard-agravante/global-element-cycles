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

var offsetX1 = [-60, 60, -25, 25, 60, 20, 45, -45, -20, 60];
var offsetY1 = [30, 30, 50, 50, 0, 55, 40, 40, 55, 0];

var offsetX2 = [5, -5, 6, -6, 0, 6, -5, 5, -6, 0];
var offsetY2 = [5, 5, 3, 3, 6, -3, 5, 5, -3, 6];

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
      c.lineWidth = 2;
      linesX_start[ctr] = posX[i] + offsetX1[ctr] + offsetX2[ctr];
      linesY_start[ctr] = posY[i] + offsetY1[ctr] + offsetY2[ctr];
      linesX_end[ctr] = posX[j] - offsetX1[ctr] + offsetX2[ctr];
      linesY_end[ctr] = posY[j] - offsetY1[ctr] + offsetY2[ctr];
      c.moveTo(linesX_start[ctr], linesY_start[ctr]);
      c.lineTo(linesX_end[ctr], linesY_end[ctr]);
      c.strokeStyle = "red";
      c.stroke();
      c.closePath();
      
      c.beginPath();
      c.lineWidth = 2;
      linesX_start[ctr + 10] = posX[i] + offsetX1[ctr] - offsetX2[ctr];
      linesY_start[ctr + 10] = posY[i] + offsetY1[ctr] - offsetY2[ctr];
      linesX_end[ctr + 10] = posX[j] - offsetX1[ctr] - offsetX2[ctr];
      linesY_end[ctr + 10] = posY[j] - offsetY1[ctr] - offsetY2[ctr];
      c.moveTo(linesX_start[ctr + 10], linesY_start[ctr + 10]);
      c.lineTo(linesX_end[ctr + 10], linesY_end[ctr + 10]);
      c.strokeStyle = "red";
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