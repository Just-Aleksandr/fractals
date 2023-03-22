var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");
context.strokeStyle = "#008000";

context.translate(canvas.width / 2, canvas.height);
context.rotate(Math.PI);
context.moveTo(0, 0);

var tree = function (length) {
  if (length > 1) {
    context.beginPath();
    context.moveTo(0, 0);
    context.lineTo(0, length);
    context.translate(0, length);
    context.stroke();
    context.closePath();
    context.save();
    context.rotate((45 * Math.PI) / 180);
    tree(length * 0.67);
    context.restore();
    context.rotate((-45 * Math.PI) / 180);
    tree(length * 0.67);
  }
};

var defaultTree = function () {
  tree(60);
};

// defaultTree();
tree(120);
