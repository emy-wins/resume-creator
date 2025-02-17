const prevBtns = document.querySelectorAll(".btn-prev");
const nextBtns = document.querySelectorAll(".btn-next");
const progress = document.getElementById("progress");
const formSteps = document.querySelectorAll(".form-step");
const progressSteps = document.querySelectorAll(".progress-step");

let formStepsNum = 0;

nextBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    formStepsNum++;
    updateFormSteps();
    updateProgressbar();
  });
});

prevBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    formStepsNum--;
    updateFormSteps();
    updateProgressbar();
  });
});

function updateFormSteps() {
  formSteps.forEach((formStep) => {
    formStep.classList.contains("form-step-active") &&
      formStep.classList.remove("form-step-active");
  });

  formSteps[formStepsNum].classList.add("form-step-active");
}

function updateProgressbar() {
  progressSteps.forEach((progressStep, idx) => {
    if (idx < formStepsNum + 1) {
      progressStep.classList.add("progress-step-active");
    } else {
      progressStep.classList.remove("progress-step-active");
    }
  });

  const progressActive = document.querySelectorAll(".progress-step-active");

  progress.style.width =
    ((progressActive.length - 1) / (progressSteps.length - 1)) * 100 + "%";
}



$(document).ready(function () {
  $("#colorPicker1").on("input change", function () {
    let selectedColor = $(this).val();
    $("#cv").css('color', selectedColor);
  });
  $("#colorPicker2").on("input change", function () {
    let selectedColor = $(this).val();
    $(".cv-bg").css('background-color', selectedColor);
  });

  // $(".dwn").on("click", function () {
  //   window.jsPDF = window.jspdf.jsPDF;
  //   var docpdf = new jsPDF();
  //   var elementHTML = document.querySelector("#cv");
  //   var invoiceNo = "MyResume";
  //   const pageWidth = docpdf.internal.pageSize.getWidth();
  //   docpdf.setFont("helvetica", "bold");
  //   docpdf.html(elementHTML, {
  //     callback: function () {
  //       docpdf.setFont("helvetica", "bold");
  //       docpdf.save(invoiceNo + '.pdf');
  //     },
  //     x: 0,
  //     y: 0,
  //     width: pageWidth,
  //     windowWidth: elementHTML.offsetWidth,
  //   });

  // });


  $(".dwn").on("click", function () {

    window.jsPDF = window.jspdf.jsPDF;
    var pdf = new jsPDF({
      orientation: "portrait",
      unit: "pt",
      format: "a4",
    });

    const svgElement = document.getElementById("vectorSVG");
    const pageWidth = pdf.internal.pageSize.getWidth();
    svg2pdf(svgElement, pdf, { x: 10, y: 10, width: pageWidth});

    pdf.setFont(undefined, 'normal')
    pdf.save("vector-svg.pdf");
  });


})




