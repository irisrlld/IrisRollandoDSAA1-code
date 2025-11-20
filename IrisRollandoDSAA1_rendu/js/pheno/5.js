let img,imgInv,imgInv2;

function preload(){
img= loadImage('dame4.png'); 
img1= loadImage('dame5.png'); 
}

function setup() {
   createCanvas(500,970);
	 img.resize(width,height)
   img1.resize(width,height)

   imgInv = img1.get();
   imgInv.filter(INVERT,0.5)

   imgInv2 = img.get();
   imgInv2.filter(INVERT,0.5)
  
}

function draw(){

  
    let img2 =imgInv2.get()
  image(img2,0,0)

   let img3 =imgInv.get()
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