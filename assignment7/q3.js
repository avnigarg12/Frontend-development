// Q3: Multi-Step Form with validation
const steps = Array.from(document.querySelectorAll('#multi-form .step'));
let current = 0;
const backBtn = document.getElementById('back-btn');
const nextBtn = document.getElementById('next-btn');
const summary = document.getElementById('summary');
const form = document.getElementById('multi-form');

function showStep(i){
  steps.forEach((s,idx)=> s.style.display = idx===i ? '' : 'none');
  backBtn.disabled = i===0;
  nextBtn.textContent = i===steps.length-1 ? 'Finish' : 'Next';
}
showStep(0);

nextBtn.addEventListener('click', () => {
  // simple validation for current step
  const inputs = steps[current].querySelectorAll('input');
  for(const inp of inputs){
    if(!inp.checkValidity()){
      inp.reportValidity();
      return;
    }
  }
  if(current === steps.length-1){
    // show summary
    const name = document.getElementById('step-name').value;
    const email = document.getElementById('step-email').value;
    const pass = document.getElementById('step-pass').value;
    summary.classList.remove('hidden');
    summary.innerHTML = `<h3>Summary</h3><p>Name: ${name}</p><p>Email: ${email}</p><p>Password: ${'*'.repeat(pass.length)}</p>`;
    form.style.display = 'none';
  } else {
    current++;
    showStep(current);
  }
});

backBtn.addEventListener('click', () => {
  if(current>0){ current--; showStep(current); }
});
