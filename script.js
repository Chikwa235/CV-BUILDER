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
