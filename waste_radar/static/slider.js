var slideImg=document.getElementById("slideImg");
var images=new Array();
images[0] = new Image();
images[0].src="{% static 'images\image1.jpeg' %}";
images[1] = new Image();
images[1].src="{% static 'images\images2.jpeg' %}";
images[2] = new Image();
images[2].src="{% static 'images\images3.jpeg' %}";
images[3] = new Image();
images[3].src="{% static 'images\images4.jpeg' %}";
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

  