'use strict';

var screen = $('#screen');
var buttons = $('.buttons');


buttons.children().on('click', function(){
  var text = $(this).text();

  if($(this).hasClass('clear')){
    screen.text('');
  }else if($(this).hasClass('equals')){
    evaluate(screen.text());
  }else{
    if(screen.text() === ''){
      screen.text(text);
    }else{
      screen.append(text);
    }
  }

});

function evaluate (equation) {
  equation = replace(equation);
  try {
    screen.text(eval(equation));
  }catch(e){
    screen.text('Improper equation');
    screen.text('');
  }
}


function replace (str) {
  str = str.replace('x', '*');
  str = str.replace('÷', '/');
  return str;
}
