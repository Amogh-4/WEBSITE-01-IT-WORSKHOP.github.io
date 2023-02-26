
var counter =0;
let popup = document.getElementById("popup");
let popup1 = document.getElementById("popup1");
let popup2 = document.getElementById("popup2");
let body = document.getElementById("body");

var flag = 0;
var fl=2;
var f2=2;
var flag1=0;

function openPopUp(){
        popup.classList.add("open-popup");
        body.classList.add("open-body");
};
function openPopUp1(){
    popup1.classList.add("open-popup1");
    body.classList.add("open-body");
};
function openPopUp2(){
    popup2.classList.add("open-popup2");
    body.classList.add("open-body");
};
function closePopUp(){
    popup.classList.remove("open-popup");
    body.classList.remove("open-body");
};
function closePopUp1(){
    popup1.classList.remove("open-popup1");
    body.classList.remove("open-body");
};
function closePopUp2(){
    popup2.classList.remove("open-popup2");
    body.classList.remove("open-body");
};
function cell1(){
    if((fl==2)&&(f2==2))
    printf();
}

function cell2(){
    if((fl==2)&&(f2==2))
    printf();
}

function cell3(){
    if((fl==2)&&(f2==2))
    printf();
}

function cell4(){
    if((fl==2)&&(f2==2))
    printf();
}

function cell5(){
    if((fl==2)&&(f2==2))
    printf();
}

function cell5(){
    if((fl==2)&&(f2==2))
    printf();
}

function cell6(){
    if((fl==2)&&(f2==2))
    printf();
}

function cell7(){
    if((fl==2)&&(f2==2))
    printf();
}

function cell8(){
    if((fl==2)&&(f2==2))
    printf();
}

function cell9(){
    if((fl==2)&&(f2==2))
    printf();
}
function checkwin(){
    if((document.getElementById("c1").value=="O")&&(document.getElementById("c2").value=="O")&&(document.getElementById("c3").value=="O")){
        fl=9;
        flag=1;
        Exit();
        openPopUp();
    }
    else if((document.getElementById("c4").value=="O")&&(document.getElementById("c5").value=="O")&&(document.getElementById("c6").value=="O")){
        fl=9;
        flag=1;
        Exit();
        openPopUp();
        
    }
    else if((document.getElementById("c7").value=="O")&&(document.getElementById("c8").value=="O")&&(document.getElementById("c9").value=="O")){
        fl=9;
        flag=1;
        Exit();
        openPopUp();
        
    }
    else if((document.getElementById("c1").value=="O")&&(document.getElementById("c4").value=="O")&&(document.getElementById("c7").value=="O")){
        fl=9;
        flag=1;
        Exit();
        openPopUp();
        
    }
    else if((document.getElementById("c2").value=="O")&&(document.getElementById("c5").value=="O")&&(document.getElementById("c8").value=="O")){
        fl=9;
        flag=1;
        Exit();
        openPopUp();
        
    }
    else if((document.getElementById("c3").value=="O")&&(document.getElementById("c6").value=="O")&&(document.getElementById("c9").value=="O")){
        fl=9;
        flag=1;
        Exit();
        openPopUp();
        
    }
    else if((document.getElementById("c1").value=="O")&&(document.getElementById("c5").value=="O")&&(document.getElementById("c9").value=="O")){
        fl=9;
        flag=1;
        Exit();
        openPopUp();
        
    }
    else if((document.getElementById("c3").value=="O")&&(document.getElementById("c5").value=="O")&&(document.getElementById("c7").value=="O")){
        fl=9;
        flag=1;
        Exit();
        
        openPopUp();
        
        
    }
    else if((document.getElementById("c1").value=="X")&&(document.getElementById("c2").value=="X")&&(document.getElementById("c3").value=="X")){
        f2=9;
        flag1=1;
        Exit();
        openPopUp1();
    }
    else if((document.getElementById("c4").value=="X")&&(document.getElementById("c5").value=="X")&&(document.getElementById("c6").value=="X")){
        f2=9;
        flag1=1;
        Exit();
        openPopUp1();
        
    }
    else if((document.getElementById("c7").value=="X")&&(document.getElementById("c8").value=="X")&&(document.getElementById("c9").value=="X")){
        f2=9;
        flag1=1;
        Exit();
        openPopUp1();
        
    }
    else if((document.getElementById("c1").value=="X")&&(document.getElementById("c4").value=="X")&&(document.getElementById("c7").value=="X")){
        f2=9;
        flag1=1;
        Exit();
        openPopUp1();
        
    }
    else if((document.getElementById("c2").value=="X")&&(document.getElementById("c5").value=="X")&&(document.getElementById("c8").value=="X")){
        f2=9;
        flag1=1;
        Exit();
        openPopUp1();
        
    }
    else if((document.getElementById("c3").value=="X")&&(document.getElementById("c6").value=="X")&&(document.getElementById("c9").value=="X")){
        f2=9;
        flag1=1;
        Exit();
        openPopUp1();
        
    }
    else if((document.getElementById("c1").value=="X")&&(document.getElementById("c5").value=="X")&&(document.getElementById("c9").value=="X")){
        f2=9;
        flag1=1;
        Exit();
        openPopUp1();
        
    }
    else if((document.getElementById("c3").value=="X")&&(document.getElementById("c5").value=="X")&&(document.getElementById("c7").value=="X")){
        f2=9;
        flag1=1;
        Exit();
        
        openPopUp1();
        
        
    }
    
    
}   

function printf(){
    if((fl==2)&&(f2==2)){
        var rand = Math.floor(Math.random()*9)+1;
        if((flag==0)&&(flag1==0)){
            checkwin();
            
            
        }
        if(rand==1){
            if(document.getElementById("c1").value==""){
                document.getElementById("c1").value="X";
                counter++;    
            }
            else{
                counter++;
                printf();
            }
            
        }
        if(rand==2){
            if(document.getElementById("c2").value==""){
                document.getElementById("c2").value="X";
                counter++;
            }
            else{
                counter++;
                if(fl==2)
                printf();
            }
            
        }
        if(rand==3){
            if(document.getElementById("c3").value==""){
                document.getElementById("c3").value="X";
                counter++;
            }
            else{
                counter++;
                if(fl==2)
                printf();
            }
            
        }
        if(rand==4){
            if(document.getElementById("c4").value==""){
                document.getElementById("c4").value="X";
                counter++;
            }
            else{
                counter++;
                if(fl==2)
                printf();
            }
        }
        if(rand==5){
            if(document.getElementById("c5").value==""){
                document.getElementById("c5").value="X";
                counter++;
            }
            else{
                counter++;
                if(fl==2)
                printf();
            }
        }
        if(rand==6) {
            if(document.getElementById("c6").value==""){
                document.getElementById("c6").value="X";
                counter++;
            }
            else{
                counter++;
                if(fl==2)
                printf();
            }
        }
        if(rand==7){ 
            if(document.getElementById("c7").value==""){
                document.getElementById("c7").value="X";
                counter++;
            }
            else{
                counter++;
                if(fl==2)
                printf();
            }
        }
        if(rand==8){
            if(document.getElementById("c8").value==""){
                document.getElementById("c8").value="X";
                counter++;
            }
            else{
                counter++;
                if(fl==2)
                printf();
            }
        }
        if(rand==9){
            if(document.getElementById("c9").value==""){
                document.getElementById("c9").value="X";
                counter++;
            
            }
            else{
                counter++;
                if(fl==2)
                printf();
            }
    }
    
}
// else{
//     return;
// }

}
function Exit(){
    if(document.getElementById("c9").value==""){
        document.getElementById("c9").value="-";
    }
    if(document.getElementById("c8").value==""){
        document.getElementById("c8").value="-";
    }
    if(document.getElementById("c7").value==""){
        document.getElementById("c7").value="-";
    }
    if(document.getElementById("c6").value==""){
        document.getElementById("c6").value="-";
    }
    if(document.getElementById("c5").value==""){
        document.getElementById("c5").value="-";
    }
    if(document.getElementById("c4").value==""){
        document.getElementById("c4").value="-";
    }
    if(document.getElementById("c3").value==""){
        document.getElementById("c3").value="-";
    }
    if(document.getElementById("c2").value==""){
        document.getElementById("c2").value="-";
    }
    if(document.getElementById("c1").value==""){
        document.getElementById("c1").value="-";
    }

}