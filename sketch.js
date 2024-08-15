function setup() {
    createCanvas(400, 400);
    background("red");
  }
  
  function draw() {
    stroke("yellow");
    fill("orange");
    if(mouseIsPressed)
      rect(mouseX, mouseY, 20, 45);
  }