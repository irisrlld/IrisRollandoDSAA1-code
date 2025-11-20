let img, imginv;

function preload() {
  img= loadImage('Etarot1.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);



  img.resize(300, 300);

  noSmooth();
}

function draw() {

   
push();

  img.loadPixels();

  for (let i = 0; i < 100; i++) {
    sortPixels();
  }

  img.updatePixels();

  image(img, 0, 0, width, height);

  
   tint(100,80)
  image(img,frameCount*0.5,50)
  tint(600,20)
   image(img,frameCount*1,170)

  
 }



function sortPixels() {

  imginv = img.get();
   imginv.filter(INVERT)
   image(imginv,0,0)
   
  
  const x = random(imginv.width);
  const y = random(imginv.height - 1);


  const colorOne = imginv.get(x, y);

  
  const colorTwo = imginv.get(x, y + 1);

  
  const totalOne = red(colorOne) + green(colorOne) + blue(colorTwo);
  const totalTwo = red(colorTwo) + green(colorTwo) + blue(colorTwo);


  if (totalOne < totalTwo) {
    img.set(x, y, colorTwo);
    img.set(x, y + 1, colorOne);
  }
}

