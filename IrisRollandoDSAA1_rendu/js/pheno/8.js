function preload(){
img= loadImage('dame5.png');
}

function setup() {
    background(255)
   createCanvas(500,970);
	 img.resize(width,height)
	 
  altererImg(img,150)

  background(255)

}

function draw(){
  image(img,frameCount*0.1,0)
  image(img,0,frameCount*0.1)
  image(img,frameCount*0.5,0)
}

function altererImg(img,treshold){
   img.loadPixels(); 
  for (let i = 0; i < img.pixels.length; i += 4) {
   let r =img.pixels[i] 
    let v =img.pixels[i+1]
    let b =img.pixels[i+2]
    let a =img.pixels[i+3]

    if((r+v+b)/3<treshold){
        img.pixels[i+3]=0
    }
  }
  img.updatePixels(); 
}