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