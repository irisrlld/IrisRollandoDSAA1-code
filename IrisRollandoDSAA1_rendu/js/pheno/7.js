let imgMain;    
let imgCircle;  
let taille = 20;
let step = 20;

function preload() {
  imgMain = loadImage('Etarot1.png');      
  imgCircle = loadImage('dame1.png'); 
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CORNER);
  imgMain.resize(350, 600);
  imgCircle.resize(width, height);
  noStroke();
  background(34, 17, 17);
}

function draw() {

  let nbrRepetitions = 50; 
  for (let i = 0; i < nbrRepetitions; i++) {
    let x = random(width);
    let y = random(height);

    
    let fragment = get(x, y, taille, taille);

    
    image(fragment, x + random(-step, step), y + random(-step, step));
  }

  
  let xCircle = noise(frameCount * 0.01) * width;
  let yCircle = noise(800 + frameCount * 0.01) * height;

  let fragCircle = imgCircle.get(xCircle, yCircle, 140, 140);

  image(fragCircle, xCircle - 70, yCircle - 70, 140, 140); 

  
}


function mouseDragged() {
  taille = map(mouseX, 0, width, 5, 100);
  step = map(mouseY, 0, height, 5, 100);
}
