var count=15;
function countFun(){
    count-=1;
    document.getElementById("showCount").innerHTML=count +" remaining";
    
}
var resetBtn = document.getElementById("reset");
    resetBtn.disabled = "disabled"