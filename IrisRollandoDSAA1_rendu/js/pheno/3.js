let img1, img2;
let alpha = 0;      
let fadeSpeed = 2;  
let direction = 1;  

function preload() {
  img1 = loadImage('dameev.JPEG');
  img2 = loadImage('damej.JPEG');
}

function setup() {
  createCanvas(550, 900);
}

function draw() {
  image(img1, 0, 0, width, height);

  tint(255, alpha);
  image(img2, 0, 0, width, height);
  noTint();

  
  alpha += fadeSpeed * direction;

  
  if (alpha >= 255 || alpha <= 0) {
    direction *= -1;
  }
}
