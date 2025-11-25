// Q5: Image gallery modal preview
const gallery = document.getElementById('gallery');
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-img');

gallery.addEventListener('click', (e) => {
  if(e.target.tagName !== 'IMG') return;
  modalImg.src = e.target.src.replace('/200','/800');
  modal.classList.remove('hidden');
});

modal.addEventListener('click', () => modal.classList.add('hidden'));
// prevent clicks inside modal-inner from closing
document.querySelector('.modal-inner').addEventListener('click', (e)=> e.stopPropagation());
