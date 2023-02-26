var i=0;
var j=0;


function player1(){
    var a = Math.floor(Math.random()*6)+1;
    document.getElementById("rand").innerHTML=a;
    i=i+a;
    if(i==1){
        document.getElementById(i-a).style.opacity="0";
        i=38;
        document.getElementById(i).style.background="green";
    }else if(i==4){
        document.getElementById(i-a).style.opacity="0";
        i=14;
        document.getElementById(i).style.background="green";
    }else if(i==8){
        document.getElementById(i-a).style.opacity="0";
        i=30;
        document.getElementById(i).style.background="green";
    }else if(i==21){
        document.getElementById(i-a).style.opacity="0";
        i=42;
        document.getElementById(i).style.background="green";
    }else if(1==28){
        document.getElementById(i-a).style.opacity="0";
        i=76;
        document.getElementById(i).style.background="green";
    }else if(i==50){
        document.getElementById(i-a).style.opacity="0";
        i=67;
        document.getElementById(i).style.background="green";
    }else if(i==71){
        document.getElementById(i-a).style.opacity="0";
        i=92;
        document.getElementById(i).style.background="green";
    }else if(i==80){
        document.getElementById(i-a).style.opacity="0";
        i=99;
        document.getElementById(i).style.background="green";
    }else if(i==36){
        document.getElementById(i-a).style.opacity="0";
        i=6;
        document.getElementById(i).style.background="green";
    }else if(i==32){
        document.getElementById(i-a).style.opacity="0";
        i=10;
        document.getElementById(i).style.background="green";
    }else if(i==48){
        document.getElementById(i-a).style.opacity="0";
        i=26;
        document.getElementById(i).style.background="green";
    }else if(i==62){
        document.getElementById(i-a).style.opacity="0";
        i=18;
        document.getElementById(i).style.background="green";
    }else if(i==88){
        document.getElementById(i-a).style.opacity="0";
        i=24;
        document.getElementById(i).style.background="green";
    }else if(i==95){
        document.getElementById(i-a).style.opacity="0";
        i=56;
        document.getElementById(i).style.background="green";
    }else if(i==97){
        document.getElementById(i-a).style.opacity="0";
        i=78;
        document.getElementById(i).style.background="green";
    }else{
        document.getElementById(i-a).style.opacity="0";
        document.getElementById(i).style.background="green";
    }
}

function player2(){
    var a = Math.floor(Math.random()*6)+1;
    document.getElementById("rand").innerHTML=a;
    j=j+a;
    if(j==1){
        document.getElementById(j-a).style.opacity="0";
        j=38;
        document.getElementById(j).style.background="green";
    }else if(j==4){
        document.getElementById(j-a).style.opacity="0";
        j=14;
        document.getElementById(j).style.background="green";
    }else if(j==8){
        document.getElementById(j-a).style.opacity="0";
        j=30;
        document.getElementById(j).style.background="green";
    }else if(j==21){
        document.getElementById(j-a).style.opacity="0";
        j=42;
        document.getElementById(j).style.background="green";
    }else if(1==28){
        document.getElementById(j-a).style.opacity="0";
        j=76;
        document.getElementById(j).style.background="green";
    }else if(j==50){
        document.getElementById(j-a).style.opacity="0";
        j=67;
        document.getElementById(j).style.background="green";
    }else if(j==71){
        document.getElementById(j-a).style.opacity="0";
        j=92;
        document.getElementById(j).style.background="green";
    }else if(j==80){
        document.getElementById(j-a).style.opacity="0";
        j=99;
        document.getElementById(j).style.background="green";
    }else if(j==36){
        document.getElementById(j-a).style.opacity="0";
        j=6;
        document.getElementById(j).style.background="green";
    }else if(j==32){
        document.getElementById(j-a).style.opacity="0";
        j=10;
        document.getElementById(j).style.background="green";
    }else if(j==48){
        document.getElementById(j-a).style.opacity="0";
        j=26;
        document.getElementById(j).style.background="green";
    }else if(j==62){
        document.getElementById(j-a).style.opacity="0";
        j=18;
        document.getElementById(j).style.background="green";
    }else if(j==88){
        document.getElementById(j-a).style.opacity="0";
        j=24;
        document.getElementById(j).style.background="green";
    }else if(j==95){
        document.getElementById(j-a).style.opacity="0";
        j=56;
        document.getElementById(j).style.background="green";
    }else if(j==97){
        document.getElementById(j-a).style.opacity="0";
        j=78;
        document.getElementById(j).style.background="green";
    }else{
        document.getElementById(j-a).style.opacity="0";
        document.getElementById(j).style.background="green";
    }
}