// Q1: Dynamic Product List Manager using event delegation
const pAdd = document.getElementById('p-add');
const pName = document.getElementById('p-name');
const pList = document.getElementById('product-list');

pAdd.addEventListener('click', () => {
  const name = pName.value.trim();
  if(!name) return;
  const li = document.createElement('li');
  li.innerHTML = `<span class="product-text">${escapeHtml(name)}</span>
    <button class="edit-btn">Edit</button>
    <button class="del-btn">Delete</button>`;
  pList.appendChild(li);
  pName.value = '';
});

pList.addEventListener('click', (e) => {
  const li = e.target.closest('li');
  if(!li) return;
  if(e.target.classList.contains('del-btn')) {
    li.remove();
    return;
  }
  if(e.target.classList.contains('edit-btn')) {
    enterEditMode(li);
  }
});

// auto-save when clicking outside an edited item
document.addEventListener('click', (e) => {
  const editing = pList.querySelector('.editing');
  if(editing && !editing.contains(e.target)) finishEdit(editing);
});

function enterEditMode(li) {
  const span = li.querySelector('.product-text');
  const text = span.textContent;
  span.innerHTML = `<input class="edit-input" value="${escapeHtml(text)}">`;
  li.classList.add('editing');
  const input = li.querySelector('.edit-input');
  input.focus();
  input.select();
  // save on Enter
  input.addEventListener('keydown', (ev) => {
    if(ev.key === 'Enter') {
      ev.preventDefault();
      finishEdit(li);
    }
    if(ev.key === 'Escape') {
      // cancel
      span.textContent = text;
      li.classList.remove('editing');
    }
  }, { once: true });
}

function finishEdit(li) {
  const input = li.querySelector('.edit-input');
  if(!input) return;
  const val = input.value.trim();
  const span = li.querySelector('.product-text');
  span.textContent = val || 'Unnamed product';
  li.classList.remove('editing');
}

function escapeHtml(s){ return s.replace(/[&<>"']/g, c=>({ '&':'&amp;','<':'&lt;','>':'&gt;','\"':'&quot;',"'":'&#39;' }[c])); }
