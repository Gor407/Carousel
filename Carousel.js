let i = 0;
let images = [];images[0]= "image1.jpg";
images[1]= "image2.jpg";
images[2]= "image3.jpg";
images[3]= "image4.jpg";
images[4]= "image5.jpg";
images[5]= "image6.jpg";

function myslide(param){
if(param === 'next'){
  i++;
  if(i === images.length){i = images.length -1}
  }else{
  i--;
  if(i<0){i = 0}
  }
  document.getElementById('slide').src = images[i];
}
    
    

/*
var intervalId;
function startSlideShow(){
 intervalId = setInterval(changeElement,1000);
}
function stopSlideShow(){
clearInterval(intervalId);
}

function changeElement(){
let img = document.getElementById("slide").getAttribute("src");
let currentImageNum = img.substring(img.lastIndexOf("e") + 1,img.lastIndexOf("e") + 2);
if(currentImageNum == ){
currentImageNum =0;
}
document.getElementById("slide").setAttribute("src","Photos/" + (Number(currentImageNum) + 1) + ".jpg";);

}*/