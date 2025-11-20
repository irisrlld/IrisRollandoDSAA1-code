let img,imgInv;

function preload(){
img= loadImage('dame1.png'); 
img1= loadImage('dame2.png'); 
}

function setup() {
   createCanvas(600,970);
	 img.resize(width,height)
   img1.resize(width,height)

   imgInv = img.get();
   imgInv.filter(INVERT)
   

}

function draw(){

  
    let img2 =img.get() /
  image(img2,0,0)

   let img3 =img1.get() 
  altererImg(img3,mouseX) 
   image(img3,0,0)




}

function altererImg(img,treshold){
   img.loadPixels(); 
  for (let i = 2; i < img.pixels.length; i += 2) {
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