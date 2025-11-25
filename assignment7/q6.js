// Q6: Real-time table filter
const search = document.getElementById('search-student');
const table = document.getElementById('students-table');
const tbody = table.tBodies[0];
const noRes = document.getElementById('no-results');

search.addEventListener('input', () => {
  const q = search.value.trim().toLowerCase();
  let visible = 0;
  Array.from(tbody.rows).forEach(row => {
    const text = row.textContent.toLowerCase();
    const match = text.includes(q);
    row.style.display = match ? '' : 'none';
    if(match) visible++;
  });
  noRes.classList.toggle('hidden', visible>0 || q==='');
  if(q === '' ) noRes.classList.add('hidden');
});
