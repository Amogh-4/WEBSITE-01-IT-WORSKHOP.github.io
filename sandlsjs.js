var i=1;
var j=1;


function player1(){
    var a = Math.floor(Math.random()*6)+1;
    if(a==1){
        document.getElementById("die").src="die1.jpg";
    }else if(a==2){
        document.getElementById("die").src="die2.jpg";
    }else if(a==3){
        document.getElementById("die").src="die3.jpg";
    }else if(a==4){
        document.getElementById("die").src="die4.jpg";
    }else if(a==5){
        document.getElementById("die").src="die5.jpg";
    }else if(a==6){
        document.getElementById("die").src="die6.jpg";
    }
    i=i+a;
    if(i==1){
        document.getElementById(i-a).style.background="";
        i=38;
        document.getElementById(i).style.background="green";
    }else if(i==4){
        document.getElementById(i-a).style.background="";
        i=14;
        document.getElementById(i).style.background="green";
    }else if(i==8){
        document.getElementById(i-a).style.background="";
        i=30;
        document.getElementById(i).style.background="green";
    }else if(i==21){
        document.getElementById(i-a).style.background="";
        i=42;
        document.getElementById(i).style.background="green";
    }else if(1==28){
        document.getElementById(i-a).style.background="";
        i=76;
        document.getElementById(i).style.background="green";
    }else if(i==50){
        document.getElementById(i-a).style.background="";
        i=67;
        document.getElementById(i).style.background="green";
    }else if(i==71){
        document.getElementById(i-a).style.background="";
        i=92;
        document.getElementById(i).style.background="green";
    }else if(i==80){
        document.getElementById(i-a).style.background="";
        i=99;
        document.getElementById(i).style.background="green";
    }else if(i==36){
        document.getElementById(i-a).style.background="";
        i=6;
        document.getElementById(i).style.background="green";
    }else if(i==32){
        document.getElementById(i-a).style.background="";
        i=10;
        document.getElementById(i).style.background="green";
    }else if(i==48){
        document.getElementById(i-a).style.background="";
        i=26;
        document.getElementById(i).style.background="green";
    }else if(i==62){
        document.getElementById(i-a).style.background="";
        i=18;
        document.getElementById(i).style.background="green";
    }else if(i==88){
        document.getElementById(i-a).style.background="";
        i=24;
        document.getElementById(i).style.background="green";
    }else if(i==95){
        document.getElementById(i-a).style.background="";
        i=56;
        document.getElementById(i).style.background="green";
    }else if(i==97){
        document.getElementById(i-a).style.background="";
        i=78;
        document.getElementById(i).style.background="green";
    }else{
        document.getElementById(i-a).style.background="";
        document.getElementById(i).style.background="green";
    }
    if(i+a==100){
        var win=document.getElementById("pl1").value;
        alert(win+"won the game");
    }
}

function player2(){
    var a = Math.floor(Math.random()*6)+1;
    if(a==1){
        document.getElementById("die").src="die1.jpg";
    }else if(a==2){
        document.getElementById("die").src="die2.jpg";
    }else if(a==3){
        document.getElementById("die").src="die3.jpg";
    }else if(a==4){
        document.getElementById("die").src="die4.jpg";
    }else if(a==5){
        document.getElementById("die").src="die5.jpg";
    }else if(a==6){
        document.getElementById("die").src="die6.jpg";
    }
    j=j+a;
    if(j==1){
        document.getElementById(j-a).style.background="";
        j=38;
        document.getElementById(j).style.background="black";
    }else if(j==4){
        document.getElementById(j-a).style.background="";
        j=14;
        document.getElementById(j).style.background="black";
    }else if(j==8){
        document.getElementById(j-a).style.background="";
        j=30;
        document.getElementById(j).style.background="black";
    }else if(j==21){
        document.getElementById(j-a).style.background="";
        j=42;
        document.getElementById(j).style.background="black";
    }else if(1==28){
        document.getElementById(j-a).style.background="";
        j=76;
        document.getElementById(j).style.background="black";
    }else if(j==50){
        document.getElementById(j-a).style.background="";
        j=67;
        document.getElementById(j).style.background="black";
    }else if(j==71){
        document.getElementById(j-a).style.background="";
        j=92;
        document.getElementById(j).style.background="black";
    }else if(j==80){
        document.getElementById(j-a).style.background="";
        j=99;
        document.getElementById(j).style.background="black";
    }else if(j==36){
        document.getElementById(j-a).style.background="";
        j=6;
        document.getElementById(j).style.background="black";
    }else if(j==32){
        document.getElementById(j-a).style.background="";
        j=10;
        document.getElementById(j).style.background="black";
    }else if(j==48){
        document.getElementById(j-a).style.background="";
        j=26;
        document.getElementById(j).style.background="black";
    }else if(j==62){
        document.getElementById(j-a).style.background="";
        j=18;
        document.getElementById(j).style.background="black";
    }else if(j==88){
        document.getElementById(j-a).style.background="";
        j=24;
        document.getElementById(j).style.background="black";
    }else if(j==95){
        document.getElementById(j-a).style.background="";
        j=56;
        document.getElementById(j).style.background="black";
    }else if(j==97){
        document.getElementById(j-a).style.background="";
        j=78;
        document.getElementById(j).style.background="black";
    }else{
        document.getElementById(j-a).style.background="";
        document.getElementById(j).style.background="black";
    }
    if(i==100){
        var win=document.getElementById("pl2").value;
        alert(win+"won the game");
    }
}