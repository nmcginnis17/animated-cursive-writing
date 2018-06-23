window.addEventListener("load", function() {
  var ctx = document.querySelector("canvas").getContext("2d");

  var brushWidth = 200;
  var brushOffset = brushWidth;
  var speed = 7;
  var txt = "Today was a good day.";
  var x = 30, i = 0;

// Setting the font style
  ctx.font = "1cm Cursive";
  ctx.lineWidth = 3;
  ctx.fillStyle = "#000";


  (function draw() {
    ctx.clearRect(x, 0, 800, 150);
    ctx.setLineDash([brushWidth - brushOffset, brushOffset - speed]);
    brushOffset -= speed;
    ctx.strokeText(txt[i], x, 80);

    if(brushOffset > 0) requestAnimationFrame(draw);
    else {
      brushOffset = brushWidth;
      x += ctx.measureText(txt[i++]).width + ctx.lineWidth * Math.random();
      if(i < txt.length)
        requestAnimationFrame(draw);
    }
  })();
});
