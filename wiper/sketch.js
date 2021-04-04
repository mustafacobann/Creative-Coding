var bgColor = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(bgColor);
}

function draw() {
  putCircle();
}

function putCircle() {
  fill(random(256), 0, random(256), 160);
  noStroke();
  circle(random(0, windowWidth), random(0, windowHeight), random(1, 51));
}

function mouseDragged() {
  fill(bgColor);
  circle(mouseX, mouseY, 150);
}
