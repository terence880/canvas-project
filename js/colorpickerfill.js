var colorBlockFill = document.getElementById('color-blockFill');
var ctx5 = colorBlockFill.getContext('2d');
var width3 = colorBlockFill.width;
var height3 = colorBlockFill.height;

var colorStripFill = document.getElementById('color-stripFill');
var ctx6 = colorStripFill.getContext('2d');
var width4 = colorStripFill.width;
var height4 = colorStripFill.height;

var colorLabelFill = document.getElementById('color-labelFill');

var x = 0;
var y = 0;
var drag = false;
var rgbaColorFill = 'rgba(255,0,0,1)';

ctx5.rect(0, 0, width3, height3);
fillGradientFill();

ctx6.rect(0, 0, width4, height4);
var grd2 = ctx6.createLinearGradient(0, 0, 0, height4);
grd2.addColorStop(0, 'rgba(255, 0, 0, 1)');
grd2.addColorStop(0.17, 'rgba(255, 255, 0, 1)');
grd2.addColorStop(0.34, 'rgba(0, 255, 0, 1)');
grd2.addColorStop(0.51, 'rgba(0, 255, 255, 1)');
grd2.addColorStop(0.68, 'rgba(0, 0, 255, 1)');
grd2.addColorStop(0.85, 'rgba(255, 0, 255, 1)');
grd2.addColorStop(1, 'rgba(255, 0, 0, 1)');
ctx6.fillStyle = grd2;
ctx6.fill();

function click(e) {
  x = e.offsetX;
  y = e.offsetY;
  var imageDataFill = ctx6.getImageData(x, y, 1, 1).data;
  rgbaColorFill = 'rgba(' + imageDataFill[0] + ',' + imageDataFill[1] + ',' + imageDataFill[2] + ',1)';
  fillGradientFill();
}

function fillGradientFill() {
  ctx5.fillStyle = rgbaColorFill;
  ctx5.fillRect(0, 0, width3, height3);

  var grdWhiteFill = ctx6.createLinearGradient(0, 0, width3, 0);
  grdWhiteFill.addColorStop(0, 'rgba(255,255,255,1)');
  grdWhiteFill.addColorStop(1, 'rgba(255,255,255,0)');
  ctx5.fillStyle = grdWhiteFill;
  ctx5.fillRect(0, 0, width3, height3);

  var grdBlackFill = ctx6.createLinearGradient(0, 0, 0, height3);
  grdBlackFill.addColorStop(0, 'rgba(0,0,0,0)');
  grdBlackFill.addColorStop(1, 'rgba(0,0,0,1)');
  ctx5.fillStyle = grdBlackFill;
  ctx5.fillRect(0, 0, width3, height3);
}

function mousedown(e) {
  drag = true;
  changeColorFill(e);
}

function mousemove(e) {
  if (drag) {
    changeColorFill(e);
  }
}

function mouseup(e) {
  drag = false;
}

function changeColorFill(e) {
  x = e.offsetX;
  y = e.offsetY;
  var imageDataFill = ctx5.getImageData(x, y, 1, 1).data;
  rgbaColorFill = 'rgba(' + imageDataFill[0] + ',' + imageDataFill[1] + ',' + imageDataFill[2] + ',1)';
  colorLabelFill.style.backgroundColor = rgbaColorFill;
}

colorStripFill.addEventListener("click", click, false);

colorBlockFill.addEventListener("mousedown", mousedown, false);
colorBlockFill.addEventListener("mouseup", mouseup, false);
colorBlockFill.addEventListener("mousemove", mousemove, false);