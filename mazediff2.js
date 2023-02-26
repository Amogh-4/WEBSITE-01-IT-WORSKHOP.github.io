var sec=0;
var min=1;
var interval = 1000;
var handler = function(){
    sec++;
    if(sec==60){
        min=0;
        sec=0;
    }
    var secdisp = 60-sec;
    if(secdisp<10){
        document.getElementById("time").innerHTML = "0"+min+":"+"0"+secdisp;
    }else{
        document.getElementById("time").innerHTML = "0"+min+":"+secdisp;
    }
};
setInterval(handler,interval);


var i =62;
let popup = document.getElementById("popup");
let body = document.getElementById("body");

function openPopUp(){
        popup.classList.add("open-popup");
        body.classList.add("open-body");
};
function closePopUp(){
    popup.classList.remove("open-popup");
    body.classList.remove("open-body");
};
document.onkeydown = function (e) { 
   
   var keyp =  e.key;

   let elements = document.querySelectorAll("[id^='td']");

   

   var array = document.getElementsByClassName('clean');
   for(var j=0;j<array.length;j++){
    array[j].value=1;
   }
   array[0].value=20;
   array[1].value=21;
   
   
   

   if(keyp == 'ArrowUp'){
    if((document.getElementById(i-43).value==1)||(document.getElementById(i-43).value==20)||(document.getElementById(i-43).value==21)){
        document.getElementById(i).style.background="#ff6666";
        i=i-43;
        document.getElementById(i).style.background="red";
        if((document.getElementById(i).value==20)||(document.getElementById(i).value==21)){
            openPopUp();
        }
    }
   
   }else if(keyp == 'ArrowDown' ){
    if(document.getElementById(i+43).value==1){
        document.getElementById(i).style.background="#ff6666";
        i=i+43;
        document.getElementById(i).style.background="red";
    }
   }else if(keyp == 'ArrowLeft'){
     if(document.getElementById(i-1).value==1){
        document.getElementById(i).style.background="#ff6666";
        i=i-1;
        document.getElementById(i).style.background="red";
    }
   }else if(keyp == 'ArrowRight'){
    if(document.getElementById(i+1).value==1){
        document.getElementById(i).style.background="#ff6666";
        i=i+1;
        document.getElementById(i).style.background="red";
    }
    
   }
//     else if((document.getElementById(i).value==20)||(document.getElementById(i).value==21)){
//     document.getElementsByTagName("div")[1][0].removeattribute("left1");
//     document.getElementsByTagName("div")[1][2].removeattribute("right1");
// }

   
  };




