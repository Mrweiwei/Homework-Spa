    var time=document.getElementById('time');
    var seconds=9;
    var setIntervalID;
    function can(){
          if(seconds<1){
             time.value="同意";
             time.disabled=false;
             clearInterval(setIntervalID);
    }
          else{
            time.value="同意"+seconds+"s";
            
          }

          seconds--;


}

window.onload=function(){
setIntervalID=setInterval("can()",1000);
}





