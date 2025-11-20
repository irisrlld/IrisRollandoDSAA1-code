let img1, img2;
let yOffset = 0;
let amplitude = 30; 
let speed = 0.02;   
let angle = 0;   

function preload() {
  img1 = loadImage('damef.JPEG');
  img2 = loadImage('dameev.JPEG');
}

function setup() {
  createCanvas(550, 1000);
}

function draw() {
  background(0);

  image(img1, 0, 0, width, height);

  yOffset = amplitude * sin(angle);

  blend( img2, 0, 0, img2.width, img2.height, 0, yOffset,width, height, SCREEN);

  angle += speed;
}
