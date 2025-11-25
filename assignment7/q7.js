// Q7: Mouse path and coordinates
const box = document.getElementById('mouse-box');
const mx = document.getElementById('mx');
const my = document.getElementById('my');

box.addEventListener('mousemove', (e) => {
  mx.textContent = e.clientX;
  my.textContent = e.clientY;
});

box.addEventListener('dblclick', (e) => {
  const rect = box.getBoundingClientRect();
  const dot = document.createElement('div');
  dot.className = 'red-dot';
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  dot.style.left = x + 'px';
  dot.style.top = y + 'px';
  box.appendChild(dot);
});
