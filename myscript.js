var cnt=0;
function CountFun(){
    cnt=parseInt(cnt)+parseInt(1);
    var divData=document.getElementById("showCount");
    divData.innerHTML="Number of Downloads: ("+cnt +")";
}
CountFun();