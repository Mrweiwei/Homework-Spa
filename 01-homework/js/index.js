var width=document.getElementById('rectangle-width');
var height=document.getElementById('rectangle-height');
var calc=document.getElementById('rectangle-calc');


calc.onclick=function(){
  var p=document.getElementById('rectangle-perimeter');
  var a=document.getElementById('rectangle-area');
  var wz=parseFloat(width.value);
  var hz=parseFloat(height.value);
  p.value=(wz+hz)*2;
  a.value=wz*hz;
}

width.onblur=function(){
  var w=document.getElementById('w');
  if(width.value==''){
       w.innerHTML='请输入宽度';
      }
  else{
    w.innerHTML='*';
  }
}

height.onblur=function(){
  var h=document.getElementById('h');
  if(height.value=='')
       {
     h.innerHTML='请输入高度';
    }
  else{
    h.innerHTML='*';
  }
}


