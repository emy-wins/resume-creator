if (document.querySelector('#download-pdf')) {
  document.getElementById("download-pdf").addEventListener("click", () => {
    // const { jsPDF } = window.jspdf;

    // const element = document.getElementById("cv");

    // html2canvas(element, {
    //   scale: 1.5, // Higher scale = better quality
    //   useCORS: true,
    //   logging: false
    // }).then((canvas) => {
    //   const imgData = canvas.toDataURL("image/jpeg", 1);

    //   // Get dimensions
    //   const pdf = new jsPDF({
    //     orientation: "portrait",
    //     unit: "px",
    //     format: "a4"
    //   });

    //   const pageWidth = pdf.internal.pageSize.getWidth();
    //   const pageHeight = pdf.internal.pageSize.getHeight();
    //   const imgWidth = canvas.width;
    //   const imgHeight = canvas.height;

    //   // Calculate dimensions to fit page
    //   const aspectRatio = imgWidth / imgHeight;
    //   let width = pageWidth * 1;
    //   let height = width / aspectRatio;

    //   if (height > pageHeight * 1) {
    //     height = pageHeight * 1;
    //     width = height * aspectRatio;
    //   }

    //   // Center the image
    //   const x = (pageWidth - width) / 2;
    //   const y = (pageHeight - height) / 2;

    //   pdf.addImage(imgData, "JPEG", x, y, width, height);
    //   pdf.addPage();
    //   pdf.save("document-section.pdf");
    // }).catch((error) => {
    //   console.error("Error generating PDF:", error);
    //   alert("Failed to generate PDF. Check console for details.");
    // });





    downloadPerfectPDF();


  });


  async function downloadPerfectPDF() {
    const { jsPDF } = window.jspdf;

    // 1. كنختارو العنصر اللي فيه الكتاب
    const element = document.querySelector("#cv");

    // 2. كنحددوا مقاسات A4 بالنقاط (Points) باش الستايل يجي أدق
    const doc = new jsPDF({
      orientation: 'p',
      unit: 'pt',
      format: 'a4'
    });

    // 3. الإعدادات السحرية باش الستايل يخرج مقاد
    await doc.html(element, {
      callback: function (doc) {
        doc.save('my-book-pro.pdf');
      },
      margin: [-15, 0, 0, 0], // مارج متوازن
      autoPaging: 'text',
      x: 0,
      y: 0,
      width: 595, // عرض الصفحة A4 بالنقاط (تقريبا 595pt - المارج)
      windowWidth: 800, // كياخد العرض الحقيقي اللي نتا مصمم به الستايل
      html2canvas: {
        scale: 0.75, // جرب 1، إلا بان لك الصور ضعيفة دير 2
        logging: true,
        letterRendering: true, // هادي كتحسن رسم الحروف
        allowTaint: false,
        useCORS: true
        // كيحسن جودة الحروف
      }
    });
  }

}