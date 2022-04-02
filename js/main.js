$(document).ready(function() {
    $('.questions-info__heading').click(function(event) {
      $(this).toggleClass("active").next().slideToggle(300);
    });
  });

  $(function(){

    $('.questions-answers__link').on('click', function(e) {
        e.preventDefault();
  
        $('.questions-answers__link').removeClass('questions-answers__link--active');
        $(this).addClass('questions-answers__link--active');
  
        $('.questions-answers__info').removeClass('questions-answers__info--active');
        $($(this).attr('href')).addClass('questions-answers__info--active');
    });
  });

  $(document).ready(function() {
    $('.header__burger').click(function(event) {
      $('.header__burger,.nav__list-device').toggleClass('active');
      $('body').toggleClass('lock');
    });
  });
