let mainImg;       
let fragmentImg;   
let displaceColorsSrc;
let fragments = []; 

function preload() {
  mainImg = loadImage('dame3.png');      
  fragmentImg = loadImage('dame5.png'); 
}

function setup() {
  createCanvas(550, 1000, WEBGL);

  imageMode(CENTER);

  mainImg.resize(550, 1000);

  displaceColorsSrc = `
  precision highp float;
  
  uniform sampler2D tex0;
  varying vec2 vTexCoord;
  
  vec2 zoom(vec2 coord, float amount) {
    vec2 relativeToCenter = coord - 0.5;
    relativeToCenter /= amount;
    return relativeToCenter + 0.5;
  }
  
  void main() {
    gl_FragColor = vec4(
      texture2D(tex0, vTexCoord).r,
      texture2D(tex0, zoom(vTexCoord, 1.05)).g,
      texture2D(tex0, zoom(vTexCoord, 1.1)).b,
      texture2D(tex0, vTexCoord).a
    );
  }
  `;
}

function draw() {

  push();
  imageMode(CENTER);
  image(mainImg, 0, 0, width, height, 0, 0, mainImg.width, mainImg.height, COVER);
  pop();

 
  let shaderMain = createFilterShader(displaceColorsSrc);
  filter(shaderMain);

  for (let f of fragments) {
    push();
    resetMatrix();
    imageMode(CENTER);

    
    let fragShader = createFilterShader(displaceColorsSrc);
    filter(fragShader);

    image(f.img, f.x - width/2, f.y - height/2);
    pop();
  }
}


function mousePressed() {
  let largeur = random(10, 20);
  let hauteur = random(10, 20);

  let quantiteAleatoire = 30;
  let x = mouseX + random(-quantiteAleatoire, quantiteAleatoire);
  let y = mouseY + random(-quantiteAleatoire, quantiteAleatoire);

  let frag = fragmentImg.get(x, y, largeur, hauteur);

  
  fragments.push({
    img: frag,
    x: mouseX,
    y: mouseY
  });
}
