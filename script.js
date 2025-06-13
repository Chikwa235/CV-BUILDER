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
