'use strict';
var screen = $('#screen');
var buttons = $('.buttons');


buttons.children().on('click', function(event){
  var text = $(this).text();

  if(!$(this).hasClass('operator')){
    if(screen.text() === ''){
      screen.text(text);
    }else{
      screen.text(screen.text() + text);
    }
  }else{
    if($(this).hasClass('clear')){
      screen.text('');
    }else if($(this).hasClass('equals')){
      evaluate(screen.text());
    }else {
      if(screen.text() !== ''){
      screen.text(screen.text() + ' ' + text + ' ');
      }
    }
  }
});

function evaluate(equation) {
  var split = equation.split(' ');
  equation = replace(split);
  equation = equation.join('');

  screen.text(eval(equation));
}


function replace (arr) {
  for(var x = 0; x < arr.length; x++) {
    if(arr[x] === 'x'){
      arr[x] = '*';
    }else if(arr[x] === '÷'){
      arr[x] = '/';
    }
  }
  return arr;
}
