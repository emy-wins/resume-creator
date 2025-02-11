
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

  $(".dwn").click(function () {
    window.jsPDF = window.jspdf.jsPDF;
    var docpdf = new jsPDF();
    var elementHTML = document.querySelector("#cv");
    var invoiceNo = "MyResume";
    const pageWidth = docpdf.internal.pageSize.getWidth();
    docpdf.setFont("helvetica", "bold");
    docpdf.html(elementHTML, {
      callback: function () {
        docpdf.setFont("helvetica", "bold");
        docpdf.save(invoiceNo + '.pdf');
      },
      x: 0,
      y: 0,
      width: pageWidth,
      windowWidth: elementHTML.offsetWidth,
    });

  });

});
