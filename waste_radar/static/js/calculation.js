console.log("entered");
var bio=document.getElementById("bio-submit");
bio.addEventListener("click",DisplayBio);

var nonbio=document.getElementById("nonbio-submit");
nonbio.addEventListener("click",DisplayNonBio);

function DisplayBio(){
  console.log("suceess");
  var bag=document.getElementById("bag").value;
  var weight=document.getElementById("weight").value;

  var result=bag*10 + weight*10;
document.getElementById("bio-price").innerHTML="Congragulations you earned  "+ result+  " rupees";

}




function DisplayNonBio(){
  console.log("suceess");
  var bag=document.getElementById("bag1").value;
  var weight=document.getElementById("weight1").value;

  var result=bag*5 + weight*5;
document.getElementById("nonbio-price").innerHTML="Congragulations you earned  "+ result+  " rupees";

}
