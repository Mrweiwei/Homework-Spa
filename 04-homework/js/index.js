$(function(){
  var $btn=timerButton({
      'container':'div.main',
      'text':'同意',
      'duration':9,
      'enable':false
  });


  $btn.on('timer-button-click',function(){
    alert('同意！');
  });
});
