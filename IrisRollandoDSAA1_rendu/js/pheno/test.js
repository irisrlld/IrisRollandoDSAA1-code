let imgBase, imgBandes;
let xPositions = [];    
let nbBandes = 8;      
let largeur = 20;
let vitesse = 1;

function preload() {
  imgBase   = loadImage('damej.JPEG');   
  imgBandes = loadImage('damej.JPEG');   
}

function setup() {
  createCanvas(550, 1000);
  angleMode(DEGREES);

  imgBandes.resize(width, height);
  imgBase.resize(width, height);

  for (let i = 0; i < nbBandes; i++) {
    xPositions[i] = random(width);
  }
}

function draw() {

  image(imgBase, 0, 0, width, height);

  let r = 20 + 15 * sin(frameCount * 0.05);

  
  for (let i = 0; i < nbBandes; i++) {
    let x = xPositions[i];
    let bande = imgBandes.get(x + random(-r, r), 0, largeur, imgBandes.height);

    blendMode(OVERLAY);
    image(bande, x, 0);
    blendMode(BLEND);

   
    xPositions[i] += vitesse;

    
    if (xPositions[i] >= width) {
      xPositions[i] = -largeur;
    }
  }
}
