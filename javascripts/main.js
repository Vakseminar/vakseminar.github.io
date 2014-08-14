
$(document).ready(function(){

  function scrollTela(id) {
    var posicao = $(id).offset().top - 260;
    $('html, body').animate({ scrollTop: posicao }, 'slow');
  }

  // scroll
  $('a[href^=\'#\']').click(function () {
      var id = $(this).attr('href');
      scrollTela(id);
      return false;
  });

  var page = window.location.hash;
  if(page) {
    scrollTela(page);
  }

});