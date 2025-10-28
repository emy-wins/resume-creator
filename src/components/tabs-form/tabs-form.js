
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

function updatePreview() {
  // Update Skills
  const skillsList = document.getElementById('previewSkills');
  skillsList.innerHTML = '';
  document.querySelectorAll('.skill-item').forEach(skill => {
    const li = document.createElement('li');
    li.className = 'skill-item';
    li.textContent = skill.textContent;
    skillsList.appendChild(li);
  });


  // Update Education
  const educationsList = document.getElementById('previewEducations');
  educationsList.innerHTML = '';
  document.querySelectorAll('.education-item').forEach(educa => {
    const li = document.createElement('li');
    li.className = 'education-item';
    li.innerHTML = educa.innerHTML;
    educationsList.appendChild(li);
  });


  // Update Experiences
  const experiencesList = document.getElementById('previewExperiences');
  experiencesList.innerHTML = '';
  document.querySelectorAll('.experience-item').forEach(exp => {
    const li = document.createElement('li');
    li.className = 'experience-item';
    li.innerHTML = exp.innerHTML;
    experiencesList.appendChild(li);
  });

  // Update Languages
  const languagesList = document.getElementById('previewLanguages');
  languagesList.innerHTML = '';
  document.querySelectorAll('.language-item').forEach(language => {
    const li = document.createElement('li');
    li.className = 'language-item';
    li.innerHTML = language.innerHTML;
    languagesList.appendChild(li);
  });

  // Update Interests
  const interestsList = document.getElementById('previewInterests');
  interestsList.innerHTML = '';
  document.querySelectorAll('.interest-item').forEach(inter => {
    const li = document.createElement('li');
    li.className = 'interest-item';
    li.innerHTML = inter.innerHTML;
    interestsList.appendChild(li);
  });
}


if (document.querySelector("#addSkillBtn")) {
  // Add Skill
  document.getElementById('addSkillBtn').addEventListener('click', () => {
    const skillInput = document.getElementById('skillInput');
    const skill = skillInput.value.trim();
    if (skill) {
      const skillsList = document.getElementById('skillsList');
      const li = document.createElement('li');
      li.className = 'skill-item';
      li.textContent = skill;
      skillsList.appendChild(li);
      skillInput.value = '';
      updatePreview();
    }
  });
  // Add interest
  document.getElementById('addInterestBtn').addEventListener('click', () => {
    const interestInput = document.getElementById('interestInput');
    const interest = interestInput.value.trim();
    if (interest) {
      const interestsList = document.getElementById('interestsList');
      const li = document.createElement('li');
      li.className = 'interest-item';
      li.textContent = interest;
      interestsList.appendChild(li);
      interestInput.value = '';
      updatePreview();
    }
  });

  // Add Experience
  document.getElementById('addExperienceBtn').addEventListener('click', () => {
    const companyName = document.getElementById('companyName').value.trim();
    const datestart = document.getElementById('datestart').value.trim();
    const datend = document.getElementById('datend').value.trim();
    const descriptionJob = document.getElementById('descriptionJob').value.trim();
    const date = new Date(datestart);
    // Example: format to DD/MM/YYYY
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    const formatted = `${day}/${month}/${year}`;

    if (companyName || descriptionJob) {
      const experiencesList = document.getElementById('experiencesList');
      const li = document.createElement('li');
      li.className = 'experience-item';
      li.innerHTML = `<strong>${companyName}</strong><br>${formatted}-${datend}<br>${descriptionJob}`;
      experiencesList.appendChild(li);
      document.getElementById('companyName').value = '';
      document.getElementById('descriptionJob').value = '';
      updatePreview();
    }
  });

  // Add Education
  document.getElementById('addEducationBtn').addEventListener('click', () => {
    const schooleName = document.getElementById('schooleName').value.trim();
    const datein = document.getElementById('datein').value.trim();
    const datout = document.getElementById('dateout').value.trim();
    const descriptiondip = document.getElementById('descriptiondip').value.trim();
    const date = new Date(datein);
    // Example: format to DD/MM/YYYY
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    const formatted = `${day}/${month}/${year}`;

    if (schooleName || descriptiondip) {
      const EducationList = document.getElementById('educationsList');
      const li = document.createElement('li');
      li.className = 'education-item';
      li.innerHTML = `<strong>${schooleName}</strong><br>${formatted}-${datout}<br>${descriptiondip}`;
      EducationList.appendChild(li);
      document.getElementById('schooleName').value = '';
      document.getElementById('descriptiondip').value = '';
      updatePreview();
    }
  });
}
