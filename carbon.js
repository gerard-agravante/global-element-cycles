var canvas = document.querySelector('canvas');

var color = 'black';

canvas.width = document.getElementById("mc-right").offsetWidth;
canvas.height = document.getElementById("mc-right").offsetHeight;

var c = canvas.getContext('2d');


var rad = 50;
var screenWidth = document.getElementById("m-canvas").width;
var screenHeight = document.getElementById("m-canvas").height;

c.beginPath();
var posx1 = screenWidth*0.5;
var posy1 = screenHeight*0.1;
c.arc(posx1, posy1, rad, 0, 2 * Math.PI);
c.fillStyle = color;
c.fill();

c.beginPath();
var posx2 = screenWidth*0.1;
var posy2 = screenHeight*0.4;
c.arc(posx2, posy2, rad, 0, 2 * Math.PI);
c.fillStyle = color;
c.fill();

c.beginPath();
var posx3 = screenWidth*(1-0.1);
var posy3 = screenHeight*0.4;
c.arc(posx3, posy3, rad, 0, 2 * Math.PI);
c.fillStyle = color;
c.fill();

c.beginPath();
var posx4 = screenWidth*0.25;
var posy4 = screenHeight*(1-0.1);
c.arc(posx4, posy4, rad, 0, 2 * Math.PI);
c.fillStyle = color;
c.fill();

c.beginPath();
var posx5 = screenWidth*(1-0.25);
var posy5 = screenHeight*(1-0.1);
c.arc(posx5, posy5, rad, 0, 2 * Math.PI);
c.fillStyle = color;
c.fill();

canvas.onmouseover = function(e) {
  c.arc(posx5, posy5, rad, 0, 2 * Math.PI);
  c.fillStyle = 'blue';
  c.fill();
}

canvas.onmouseleave = function(e) {
  c.arc(posx5, posy5, rad, 0, 2 * Math.PI);
  c.fillStyle = color;
  c.fill();
}
