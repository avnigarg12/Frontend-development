// Q2: Live Character Counter with warning behavior
const txt = document.getElementById('char-area');
const rem = document.getElementById('remaining');
const resetBtn = document.getElementById('reset-btn');
const MAX = 100;

txt.addEventListener('keydown', (e) => {
  if(txt.value.length >= MAX && e.key.length === 1 && !e.ctrlKey && !e.metaKey && !e.altKey) {
    e.preventDefault();
  }
});

txt.addEventListener('input', () => {
  const left = MAX - txt.value.length;
  rem.textContent = left;
  if(left <= 0) rem.style.color = 'red';
  else if(left <= 20) rem.style.color = 'orange';
  else rem.style.color = '';
});

resetBtn.addEventListener('click', () => {
  txt.value = '';
  rem.textContent = MAX;
  rem.style.color = '';
});
