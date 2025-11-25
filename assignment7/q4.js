// Q4: Theme switcher using setAttribute and data-theme
const themeBtns = document.querySelectorAll('.theme-btn');
const body = document.body;
const currentThemeSpan = document.getElementById('current-theme');

themeBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const t = btn.getAttribute('data-theme');
    // apply by setting class and attribute
    body.setAttribute('data-theme', t);
    body.classList.remove('theme-dark','theme-blue');
    if(t === 'dark') body.classList.add('theme-dark');
    if(t === 'blue') body.classList.add('theme-blue');
    currentThemeSpan.textContent = t;
  });
});
