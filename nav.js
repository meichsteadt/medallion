$(function() {
  $('.navicon').click(function() {
    $('.mobile-nav').css('left', 0);
    $('.nav-overlay').show();
    $('body').css('overflow', 'hidden');
  });

  $('#close').click(function() {
    $('.mobile-nav').css('left', '-100%');
    $('.nav-overlay').hide();
    $('body').css('overflow', '');
  })
  $('.nav-overlay').click(function() {
    $('.mobile-nav').css('left', '-100%');
    $('.nav-overlay').hide();
    $('body').css('overflow', '');
  })

  $('.video').click(function(){this.paused?this.play():this.pause();});
})
