var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");
var angleSlider = document.getElementById("angle-slider");
var lengthSlider = document.getElementById("length-slider");

var angle = angleSlider.value;
var length = lengthSlider.value;

context.strokeStyle = "#008000";


var tree = function (length) {
  if (length > 1) {
    context.beginPath();
    context.moveTo(0, 0);
    context.lineTo(0, length);
    context.translate(0, length);
    context.stroke();
    context.closePath();
    context.save();
    context.rotate((angle * Math.PI) / 180);
    tree(length * 0.67);
    context.restore();
    context.rotate((-angle * Math.PI) / 180);
    tree(length * 0.67);
  }
};

var defaultTree = function () {
  tree(60);
};

var draw = function () {
  context.setTransform(1, 0, 0, 1, 0, 0);
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.translate(canvas.width / 2, canvas.height);
  context.rotate(Math.PI);
  context.moveTo(0, 0);
  angle = angleSlider.value;
  length = lengthSlider.value;
  tree(length);
}

angleSlider.oninput = function () {
  draw();
}

lengthSlider.oninput = function () {
  draw();
}

draw();
