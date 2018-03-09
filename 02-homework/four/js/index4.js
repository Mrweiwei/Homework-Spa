var range=document.getElementById('range');
var age=document.getElementById('age');

age.innerHTML=range.value;

range.onchange=function(){ 
  age.innerHTML=range.value;
}
