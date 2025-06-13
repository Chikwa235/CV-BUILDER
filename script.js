function createElement(tag, text = '', className = '') {
  const el = document.createElement(tag);
  if (text) el.textContent = text;
  if (className) el.className = className;
  return el;
}

function addSkill() {
  const skillInput = document.createElement('input');
  skillInput.type = 'text';
  skillInput.placeholder = 'Skill';
  skillInput.className = 'skill';
  document.getElementById('skills-list').appendChild(skillInput);
}

function addExperience() {
  const expDiv = document.createElement('div');
  expDiv.className = 'experience';
  expDiv.innerHTML = `
    <input type="text" placeholder="Job Title" class="exp-title" />
    <input type="text" placeholder="Company" class="exp-company" />
    <textarea placeholder="Description" class="exp-desc"></textarea>
  `;
  document.getElementById('experience-list').appendChild(expDiv);
}

function addEducation() {
  const eduDiv = document.createElement('div');
  eduDiv.className = 'education';
  eduDiv.innerHTML = `
    <input type="text" placeholder="Degree" class="edu-degree" />
    <input type="text" placeholder="School" class="edu-school" />
    <textarea placeholder="Details" class="edu-details"></textarea>
  `;
  document.getElementById('education-list').appendChild(eduDiv);
}

function toggleDarkMode() {
  document.body.classList.toggle('dark');
}

function saveData() {
  const formData = new FormData(document.getElementById('cv-form'));
  const data = {};
  for (let [key, val] of formData.entries()) {
    if (!data[key]) data[key] = [];
    data[key].push(val);
  }
  localStorage.setItem('cv-data', JSON.stringify(data));
  alert('Data saved locally!');
}

function loadData() {
  const data = JSON.parse(localStorage.getItem('cv-data'));
  if (!data) return;
  document.querySelectorAll('.skill').forEach((e, i) => e.value = data['skill[]']?.[i] || '');
}

function loadSample() {
  document.getElementById('name').value = 'Chisapa Handsome Marley';
  document.getElementById('email').value = 'chisapa@example.com';
  document.getElementById('role').value = 'Frontend Developer';
  document.querySelector('.skill').value = 'HTML';
  addSkill();
  document.querySelectorAll('.skill')[1].value = 'CSS';
  addSkill();
  document.querySelectorAll('.skill')[2].value = 'JavaScript';
  document.querySelector('.exp-title').value = 'Intern Developer';
  document.querySelector('.exp-company').value = 'CodeLab Africa';
  document.querySelector('.exp-desc').value = 'Built interactive UI components.';
  document.querySelector('.edu-degree').value = 'Diploma in CS';
  document.querySelector('.edu-school').value = 'Zambia Tech Institute';
  document.querySelector('.edu-details').value = 'Focused on frontend development.';
}

