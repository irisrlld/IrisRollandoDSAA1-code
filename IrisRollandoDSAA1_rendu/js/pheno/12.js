let img1, img2;

let imgSquares1 = [];
let imgSquares2 = [];

const horizontalSquareCount = 6;
const verticalSquareCount = 6;

let squareWidth, squareHeight;

function preload() {
  img1 = loadImage('damej.JPEG');
  img2 = loadImage('dameev.JPEG'); 
}

function setup() {
  createCanvas(350, 600);

  img1.resize(width, height);
  img2.resize(width, height);

  squareWidth = width / horizontalSquareCount;
  squareHeight = height / verticalSquareCount;

  img1.loadPixels();
  img2.loadPixels();

  for (let y = 0; y < height; y += squareHeight) {
    for (let x = 0; x < width; x += squareWidth) {
      imgSquares1.push(img1.get(x, y, squareWidth, squareHeight));
      imgSquares2.push(img2.get(x, y, squareWidth, squareHeight));
    }
  }

  noLoop();
}

function mouseClicked() {
  draw();
}

function draw() {
  background(0);

  let mixedSquares = [];
  for (let i = 0; i < imgSquares1.length; i++) {
    if (random() < 0.5) {
      mixedSquares.push(imgSquares1[i]);
    } else {
      mixedSquares.push(imgSquares2[i]);
    }
  }

  mixedSquares = shuffle(mixedSquares);

 
  let squareX = 0;
  let squareY = 0;

  for (const square of mixedSquares) {
    image(square, squareX, squareY);
    squareX += squareWidth;
    if (squareX >= width) {
      squareX = 0;
      squareY += squareHeight;
    }
  }
}
