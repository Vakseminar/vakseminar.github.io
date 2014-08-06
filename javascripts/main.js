
$(document).ready(function(){

  function scrollTela(id) {
    var posicao = $(id).offset().top;
    $('html, body').animate({ scrollTop: posicao }, 'slow');
  }


  // scroll
  $('a[href^=\'#\']').click(function () {
      var id = $(this).attr('href');
      scrollTela(id);
      return false;
  });


  // $(this).scroll(function() {
  // });

});