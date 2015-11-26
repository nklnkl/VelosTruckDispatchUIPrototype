$(document).ready(function () {

  /*
    Generic Listener for Box Containers with hide/show arrows.
  */
  $('.box-button').click( function () {
    if ( $(this).parent().parent().children('div').is(':visible') ) {
      $(this).parent().parent().children('div').hide();
    } else {
      $(this).parent().parent().children('div').show();
    }
  });

});
