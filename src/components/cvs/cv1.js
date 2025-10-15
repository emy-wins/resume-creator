if (document.querySelector('#download-pdf')) {
  document.getElementById("download-pdf").addEventListener("click", () => {
    const { jsPDF } = window.jspdf;

    const element = document.getElementById("cv");

    html2canvas(element, {
      scale: 1.5, // Higher scale = better quality
      useCORS: true,
      logging: false
    }).then((canvas) => {
      const imgData = canvas.toDataURL("image/jpeg", 1);

      // Get dimensions
      const pdf = new jsPDF({
        orientation: "portrait",
        unit: "px",
        format: "a4"
      });

      const pageWidth = pdf.internal.pageSize.getWidth();
      const pageHeight = pdf.internal.pageSize.getHeight();
      const imgWidth = canvas.width;
      const imgHeight = canvas.height;

      // Calculate dimensions to fit page
      const aspectRatio = imgWidth / imgHeight;
      let width = pageWidth * 1;
      let height = width / aspectRatio;

      if (height > pageHeight * 1) {
        height = pageHeight * 1;
        width = height * aspectRatio;
      }

      // Center the image
      const x = (pageWidth - width) / 2;
      const y = (pageHeight - height) / 2;

      pdf.addImage(imgData, "JPEG", x, y, width, height);
      pdf.save("document-section.pdf");
    }).catch((error) => {
      console.error("Error generating PDF:", error);
      alert("Failed to generate PDF. Check console for details.");
    });
  });
}