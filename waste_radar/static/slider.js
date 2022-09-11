var slideImg=document.getElementById("slideImg");
var images=new Array();
images[0]="{% static 'images\image1.jpeg' %}";
images[1]="{% static 'images\images2.jpeg' %}";
images[2]="{% static 'images\images3.jpeg' %}";
images[3]="{% static 'images\images4.jpeg' %}";
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

  