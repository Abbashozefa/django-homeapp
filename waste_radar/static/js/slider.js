var slideImg=document.getElementById("slideImg");
var images=new Array(
  "{% static 'images/image1.jpeg'%}",
  "{% static'images/images2.jpeg'%}",
  "{% static'images/images3.jpeg'%}",
  "{% static'images/images4.jpeg'%}",
);
var len=images.length;
var i=0;
function slider(){
  if(i>len-1){
    i=0;
  }
  slideImg.src=images[i];
  i++;
  setTimeout('slider()',5000);
}


  