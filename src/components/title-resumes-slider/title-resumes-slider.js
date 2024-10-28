
$(".slider-resumes").slick({
  variableWidth: true,
  centerMode: true,
  arrows: true,
  dots: false,
  speed: 300,
  centerPadding: '100px',
  infinite: true,
  autoplaySpeed: 3000,
  autoplay: true,
  prevArrow: '.prev',
  nextArrow: '.next',
});
$('.popup-priview').click();

$(document).ready(function () {

  var originalImagePath = $(".popup-priview").find('img').data('image');
  $(".popup-priview").zoom({ url: originalImagePath });
 
  $(".btn-preview").click(function () {
    $('.wrap-priview').addClass('pop-active');
  });
  $(".btn-close").click(function () {
    $('.wrap-priview').removeClass('pop-active');
  });
});
