const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const renderString = urlParams.get('stringToRender');
console.log(renderString);

document.addEventListener('contextmenu', event => event.preventDefault());
var canvas = document.getElementById("maincanvas");
var ctx = canvas.getContext("2d");
var textX = canvas.width / 2;
var textY = canvas.height / 2;

canvas.addEventListener('mousemove', function(event) {
  textX = event.clientX - canvas.offsetLeft;
  textY = event.clientY - canvas.offsetTop;
});

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.font = "25px Arial"; 
  ctx.fillText(renderString, textX, textY);
}

setInterval(draw, 1)
