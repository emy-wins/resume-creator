
$(".slider-resumes").slick({
  speed: 10000,
  autoplay: true,
  autoplaySpeed: 0,
  centerMode: true,
  cssEase: 'linear',
  slidesToShow: 1,
  slidesToScroll: 1,
  variableWidth: true,
  infinite: true,
  initialSlide: 1,
  arrows: false,
  buttons: false
});
$(".slider2-resumes").slick({
  speed: 10000,
  autoplay: true,
  autoplaySpeed: 0,
  centerMode: true,
  cssEase: 'linear',
  slidesToShow: 1,
  slidesToScroll: 1,
  variableWidth: true,
  infinite: true,
  initialSlide: 1,
  arrows: false,
  buttons: false,
  rtl: true
});


$(document).ready(function () {

  $(".btn-preview").click(function () {
    $('.image-priview').attr("src", "");
    var url_cv = $(this).data('preview');
    $('.image-priview').attr("src", url_cv);
    $('.wrap-priview').addClass('pop-active');
  });

  $(".btn-close").click(function () {
    $('.wrap-priview').removeClass('pop-active');
  });

});
