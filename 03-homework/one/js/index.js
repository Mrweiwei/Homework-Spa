window.onload=function() {
  var editor = new Behave({
        textarea: document.getElementById('textarea'),
    replaceTab: true,
          softTabs: true,
          tabSize: 2,
          autoOpen: true,
          overwrite: true,
          autoStrip: true,
          autoIndent: true,
          fence: false
      
  });
  
    var button=document.getElementById('button');
  button.onclick=function(){
    var txt=document.getElementById('textarea');
    var newpre=document.createElement('pre');
    var main=document.getElementById('main');
   if(txt.value==''){
   pre.innerHTML=txt.value;
    hljs.highlightBlock(newpre);
      main.appendChild(newpre);
    }
    
  }
}




