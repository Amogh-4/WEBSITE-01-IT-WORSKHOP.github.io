var i= 2;

document.onkeydown = function (e) {
   
   var keyp =  e.key;

   var array = [20,22,23,24,25,26,27,29,30,31,32,33,35,38,40,42,43,44,45,46,47,48,49,50,51,52,53,56,58,63,65,66,68,74,76,77,78,79,81,83,84,86,87,88,89,90,92,99,101,102, 104, 105, 106, 107, 110, 111, 112, 113, 114, 115, 117, 119, 120, 130, 131, 132, 133, 134, 135, 137, 138, 139, 140, 141, 142, 143, 148, 149, 150, 151, 152, 153, 155, 156, 157, 158, 159, 160, 161]
   for(var j=0;j<array.length;j++){
    document.getElementById(array[j]).value=1;
   }

   if(keyp == 'ArrowUp'){
    if(document.getElementById(i-18).value==1){
        document.getElementById(i).style.background="#ff6666";
        i=i-18;
        document.getElementById(i).style.background="red";
    }
   }else if(keyp == 'ArrowDown' ){
    if(document.getElementById(i+18).value==1){
        document.getElementById(i).style.background="#ff6666";
        i=i+18;
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

   
  };


