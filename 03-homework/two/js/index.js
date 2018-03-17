window.onload=function(){
  var math=MathQuill.getInterface(2);
  var txt=document.getElementById('txt');
  var txta='';


  var txtfield=math.mathField(txt,{
    handlers:{
      edit:function(){
        var enMath=txtfield.latex();
            txta=enMath;
      } 
    }
  })
var main=document.getElementById('main');
var button=document.getElementById('button');
button.onclick=function(){
  var newp=document.createElement("p");
  p.innerHTML=txta;
  math.StaticMath(p.get(0));
  main.appendChild(newp);
}


}
