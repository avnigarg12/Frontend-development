// Q9: Form submit blocker with live errors
const bForm = document.getElementById('block-form');
const fName = document.getElementById('f-name');
const fEmail = document.getElementById('f-email');
const fPass = document.getElementById('f-pass');
const msg = document.getElementById('submit-msg');

function showErr(el, text){
  const span = document.querySelector(`.err[data-for="${el.id}"]`);
  if(span) span.textContent = text;
}
function clearErr(el){
  const span = document.querySelector(`.err[data-for="${el.id}"]`);
  if(span) span.textContent = '';
}

bForm.addEventListener('submit', (e) => {
  e.preventDefault();
  let ok = true;
  if(!fName.value.trim()){ showErr(fName,'Name required'); ok=false; } else clearErr(fName);
  if(!fEmail.value.includes('@')){ showErr(fEmail,'Valid email required'); ok=false; } else clearErr(fEmail);
  if(fPass.value.length < 6){ showErr(fPass,'Min 6 chars'); ok=false; } else clearErr(fPass);
  if(ok){
    msg.classList.remove('hidden');
    msg.textContent = 'Form Submitted Successfully';
    bForm.reset();
    setTimeout(()=> msg.classList.add('hidden'), 3000);
  }
});

// live clear errors on input
[fName,fEmail,fPass].forEach(i => i.addEventListener('input', () => {
  if(i === fEmail && i.value.includes('@')) clearErr(i);
  if(i === fPass && i.value.length >=6) clearErr(i);
  if(i === fName && i.value.trim()) clearErr(i);
}));
