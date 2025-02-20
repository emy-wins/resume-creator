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

  $(".dwn").on("click", function () {
    // Assume we have an SVG element in our HTML
    let svgElem = document.querySelector("#vectorSVG");

    // Convert SVG to XML
    let serializer = new XMLSerializer();
    let source = serializer.serializeToString(svgElem);

    // Convert XML to Image and draw on canvas
    let img = new Image();
    img.src = "data:image/svg+xml;base64," + window.btoa(unescape(encodeURIComponent(source)));
    let canvas = document.createElement("canvas");
    canvas.width = img.width;
    canvas.height = img.height;
    let ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0);

    // // Convert canvas to PDF (using the hypothetical saveAsPDF function)
    // canvas.saveAsPDF('output.pdf');

    window.jsPDF = window.jspdf.jsPDF;
    const pdf = new jsPDF("portrait", "mm", "a4"); // Create PDF document
    const imgWidth = 210; // A4 width in mm
    const imgHeight = (canvas.height / canvas.width) * imgWidth; // Maintain aspect ratio
    pdf.addImage(canvas, "PNG", 0, 0, imgWidth, imgHeight); // Add image to PDF
    pdf.save("canvas.pdf");
    img.onload = function () {
    };
  });

})






