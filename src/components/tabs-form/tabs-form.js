
$(document).ready(function () {
  if ($(".btn-hid")) {
    $(".btn-hid").on("click", function () {
      let tabs = document.querySelector(".tabs-section");
      let s_cv = document.querySelector('.section-cv');
      tabs.classList.toggle('tabs-close');
      s_cv.classList.toggle('w-100');
    });
  }
})

if (document.querySelector('.tab')) {
  const tabs = document.querySelectorAll(".tab");
  const panes = document.querySelectorAll(".tab-pane");
  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      // Remove active from all
      tabs.forEach(t => t.classList.remove("active"));
      panes.forEach(p => {
        p.classList.remove("active");
      });

      // Add active to selected
      tab.classList.add("active");
      const target = document.getElementById(tab.dataset.tab);
      target.classList.add("active");
    });
  });
}

if (document.querySelector('#image-file')) {
  const inputImage = document.getElementById('image-file');
  const image = document.getElementById('image');
  const preview = document.getElementById('preview');
  let cropper;

  // Load image from file input
  inputImage.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      image.src = reader.result;
      image.style.display = 'block';

      // Destroy old cropper if exists
      if (cropper) cropper.destroy();

      // Initialize Cropper
      cropper = new Cropper(image, {
        aspectRatio: 1, // square crop
        viewMode: 1,
        preview: preview, // live preview in div
      });
    };
    reader.readAsDataURL(file);
  });
}

if (document.querySelectorAll(".myInput")) {
  const inputs = document.querySelectorAll(".myInput");
  inputs.forEach(input => {
    input.addEventListener("input", function () {
      // get the value of data-id attribute
      const targetId = input.getAttribute("data-id");
      const output = document.getElementById(targetId);
      if (output) {
        output.textContent = input.value || "";
      }
    });
  });
}