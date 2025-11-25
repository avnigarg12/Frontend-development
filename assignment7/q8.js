// Q8: Custom dropdown with capturing phase closing
const ddBtn = document.getElementById('dd-btn');
const ddList = document.getElementById('dd-list');
const dropdown = document.getElementById('custom-dd');

ddBtn.addEventListener('click', (e) => {
  ddList.classList.toggle('hidden');
});

// clicking an option updates button text
ddList.addEventListener('click', (e) => {
  if(e.target.tagName === 'LI'){
    ddBtn.textContent = e.target.textContent;
    ddList.classList.add('hidden');
  }
});

// use capture on document to close when clicking outside
document.addEventListener('click', (e) => {
  if(!dropdown.contains(e.target)) ddList.classList.add('hidden');
}, true); // capturing
