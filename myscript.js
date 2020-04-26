var count=19;
var baloons=" baloons!!!";

function countFun(){    
    document.getElementById("showCount").innerHTML="Pop all the "+count+baloons;
    if(count == 0){
        document.getElementById("showCount").innerHTML= "YEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE!!!";
        location.reload();
    }
    if(count == 1){
        document.getElementById("showCount").innerHTML= "Pop the last baloon!!!";
    }   
    count-=1;
}

document.getElementsByClassName('baloo').src = 'icons8-party-balloon-104.png';
