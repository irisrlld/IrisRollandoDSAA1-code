let imgs = [];       
let imgCopies = [];  
let x = 0;
let largeur = 4;
let aleatoire;

function preload() {
  imgs[0] = loadImage('dame1.png');
  imgs[1] = loadImage('dame2.png');
  
}

function setup() {
  createCanvas(550, 1000);
  angleMode(DEGREES);
  background(255);

  for (let i = 0; i < imgs.length; i++) {
    imgs[i].resize(width, height);
  }

  aleatoire = random(8000);
}

function draw() {

  if (frameCount % 3 != 0) return; 

  let r = 20 + 15 * sin(frameCount * 0.05);
  let img = random(imgs);
  let imgCopy = img.get(x + random(-r, r), 0, largeur, img.height);
  
  if (img === imgs[1]) imgCopy.filter(INVERT);

  image(imgCopy, x, 0);
  x += largeur;

  if (x >= width) x = 0;
}
