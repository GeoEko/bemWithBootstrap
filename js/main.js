// Вариант кода изначальный для портфолио
// $(document).ready(function () {
//   $('button[filter="wd"]').click(function () {
//     if ($(this).attr('val') == 'off'); {
//       $('button[filter]').attr('val', 'off');
//       $(this).attr('val', 'on')
//       $('.filter > div').hide(300);
//       $('.filter > div[filter="wd"]').show(300);
//     }
//   });
//   $('button[filter="ud"]').click(function () {
//     if ($(this).attr('val') == 'off'); {
//       $('button[filter]').attr('val', 'off');
//       $(this).attr('val', 'on')
//       $('.filter > div').hide(300);
//       $('.filter > div[filter="ud"]').show(300);
//     }
//   });
//   $('button[filter="moc"]').click(function () {
//     if ($(this).attr('val') == 'off'); {
//       $('button[filter]').attr('val', 'off');
//       $(this).attr('val', 'on')
//       $('.filter > div').hide(300);
//       $('.filter > div[filter="moc"]').show(300);
//     }
//   });
//   $('button[filter="all"]').click(function () {
//     if ($(this).attr('val') == 'off'); {
//       $('button[filter]').attr('val', 'off');
//       $(this).attr('val', 'on')
//       $('.filter > div').show(300);

//     }
//   });
// });

// Вариант-2 кода оптимизированный для портфолио

$(document).ready(function () {
  $('.button[filter]').click(function () {
    if ($(this).attr('filter') == 'all') {
      if ($(this).attr('val') == 'off') {
        $('.button[filter]').attr('val', 'off');
        $(this).attr('val', 'on');
        $('.button[filter]').removeClass('focused');
        $(this).addClass('focused');
        $('.filter > div').show(300);
      }
    } else
      if ($(this).attr('val') == 'off') {
        $('.button[filter]').attr('val', 'off');
        $(this).attr('val', 'on');
        $('.button[filter]').removeClass('focused');
        $(this).addClass('focused');
        $('.filter > div').hide(300);
        var filter = $(this).attr('filter');
        $('.filter > div[filter=' + filter + ']').show(300);
      }
  })
});
//Слайдер
$('.multiple-items').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3,
  arrows: false,
  dots: true,
  dotsClass: 'dots-style',
  responsive: [{
    breakpoint: 1024,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 2,
    }
  }, {
    breakpoint: 480,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
    }
  }]
});
//Скрытие-открытие текста для секции блог - Вариант - 2 
$('.truncate-text').click(function () {
  $('.truncate-text').toggleClass('opener');
});

/*Меню*/
$('ul.menu a[href^="#"').click(function () {
  var target = $(this).attr('href');
  $('html, body').animate({
    scrollTop: $(target).offset().top
  }, 500);
  $('ul.menu a[href^="#"').css({ 'color': '#212121' });
  $(this).css({ 'color': '#004bee' });
  return false;
});
/* Кнопка наверх */
$(window).scroll(function () {
  if ($(this).scrollTop() != 0)
    $('#toTop').fadeIn();
  else
    $('#toTop').fadeOut();
});
$('#toTop').click(function () {
  $('body,html').animate({
    scrollTop: 0
  }, 800);
});
