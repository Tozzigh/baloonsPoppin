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

document.getElementById("1").src = 'icons8-party-balloon-10'+(Math.floor((Math.random() * 4) + 1)).toString()+'.png';
document.getElementById("2").src = 'icons8-party-balloon-10'+(Math.floor((Math.random() * 4) + 1)).toString()+'.png';
document.getElementById("3").src = 'icons8-party-balloon-10'+(Math.floor((Math.random() * 4) + 1)).toString()+'.png';
document.getElementById("4").src = 'icons8-party-balloon-10'+(Math.floor((Math.random() * 4) + 1)).toString()+'.png';
document.getElementById("5").src = 'icons8-party-balloon-10'+(Math.floor((Math.random() * 4) + 1)).toString()+'.png';
document.getElementById("6").src = 'icons8-party-balloon-10'+(Math.floor((Math.random() * 4) + 1)).toString()+'.png';
document.getElementById("7").src = 'icons8-party-balloon-10'+(Math.floor((Math.random() * 4) + 1)).toString()+'.png';
document.getElementById("8").src = 'icons8-party-balloon-10'+(Math.floor((Math.random() * 4) + 1)).toString()+'.png';
document.getElementById("9").src = 'icons8-party-balloon-10'+(Math.floor((Math.random() * 4) + 1)).toString()+'.png';
document.getElementById("10").src = 'icons8-party-balloon-10'+(Math.floor((Math.random() * 4) + 1)).toString()+'.png';
document.getElementById("11").src = 'icons8-party-balloon-10'+(Math.floor((Math.random() * 4) + 1)).toString()+'.png';
document.getElementById("12").src = 'icons8-party-balloon-10'+(Math.floor((Math.random() * 4) + 1)).toString()+'.png';
document.getElementById("13").src = 'icons8-party-balloon-10'+(Math.floor((Math.random() * 4) + 1)).toString()+'.png';
document.getElementById("14").src = 'icons8-party-balloon-10'+(Math.floor((Math.random() * 4) + 1)).toString()+'.png';
document.getElementById("15").src = 'icons8-party-balloon-10'+(Math.floor((Math.random() * 4) + 1)).toString()+'.png';
document.getElementById("16").src = 'icons8-party-balloon-10'+(Math.floor((Math.random() * 4) + 1)).toString()+'.png';
document.getElementById("17").src = 'icons8-party-balloon-10'+(Math.floor((Math.random() * 4) + 1)).toString()+'.png';
document.getElementById("18").src = 'icons8-party-balloon-10'+(Math.floor((Math.random() * 4) + 1)).toString()+'.png';
document.getElementById("19").src = 'icons8-party-balloon-10'+(Math.floor((Math.random() * 4) + 1)).toString()+'.png';
document.getElementById("20").src = 'icons8-party-balloon-10'+(Math.floor((Math.random() * 4) + 1)).toString()+'.png';
