var time=0;

window.onload=function(){
  var bar=document.getElementById('bar');
  var start=document.getElementById('start');
  var stop=document.getElementById('stop');
  var reset=document.getElementById('reset');


  start.onclick=function(){
    time=window.setInterval(function(){
      bar.value++;
    },100);

  }
  
  stop.onclick=function(){
   window.clearInterval(time);
   time=0;
  }

  reset.onclick=function(){
    bar.value=0;
  }



}
