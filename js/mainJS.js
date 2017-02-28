$(document).ready(function() {
  $(document).delegate('.open', 'click', function(event){
    $(this).addClass('oppenned');
    event.stopPropagation();                                              
  })
  $(document).delegate('body', 'click', function(event) {
    $('.open').removeClass('oppenned');
  })
  $(document).delegate('.cls', 'click', function(event){
    $('.open').removeClass('oppenned');
    event.stopPropagation();
  });
});
// End Menu

$(document).ready(function(){
  $('.addBtn').click(function(e){
    e.preventDefault();
    $("#display").load($(this).attr('href'));
  });
});

// Ajax

function sleep(){
    i++;
    if( i > 2 ){
      i = 0;
      ar = makeText(); // reset
    }
    scroll.innerHTML = '';
    start();
}

function makeText(){
  var text = "Sublime Text";
  var text1 = "Brackets";
  var text2 = "Atom";

  var stext = text.split('');
  var stext1 = text1.split('');
  var stext2 = text2.split('');
  var nasArray = [stext, stext1, stext2];
  return nasArray;
}


var ar = makeText();
var scroll = document.getElementById('scroll');
var loop;
var i = 0;


function start(){
  if(ar[i].length > 0){
    scroll.innerHTML += ar[i].shift();
    loop = setTimeout(start,400);  // speed settings
  } else {
    var ss = setTimeout(sleep , 2000);
  }
}

start();

// Animate #first