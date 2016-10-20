'use strict';
var screen = $('#screen');
var buttons = $('.buttons');


buttons.children().on('click', function(event){
  var text = $(this).text();
  if(!$(this).hasClass('operator')){
    alert('number');
  }
});
