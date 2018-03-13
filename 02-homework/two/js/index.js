var password=document.getElementById('password');
var button=document.getElementById('button');


button.onmouseover=function(){
  password.setAttribute('type','text');
  password.preventDefault();  

}

button.onmouseout=function(){
  password.setAttribute('type','password');
  
 
}
