const items = document.getElementsByClassName('item');
const draggable = document.getElementById('draggable');
const dropzone = document.getElementById('dropzone');

// Starting the drag:

draggable.addEventListener('dragstart', (e) => {
  if(e.target.matches('.item')) {
    e.target.setAttribute('id', 'dragged');
    e.dataTransfer.setData('text/plain', e.target.id);
    e.target.style.backgroundColor = '#f7f7ed';
  }
});

dropzone.addEventListener('dragstart', (e) => {
  if(e.target.matches('.item')) {
    e.target.setAttribute('id', 'dragged');
    e.dataTransfer.setData('text/plain', e.target.id);
    e.target.style.backgroundColor = '#f7f7ed';
  }
});

// Registering the dropzone with dragover:

draggable.addEventListener('dragover', (e) => {
  e.preventDefault();
});

dropzone.addEventListener('dragover', (e) => {
  e.preventDefault();
});

// Droping the cargo:

draggable.addEventListener('drop', (e) => {
  const id = e.dataTransfer.getData('text');
  const draggedElem = document.getElementById(id);
  e.target.appendChild(draggedElem);
});

dropzone.addEventListener('drop', (e) => {
  const id = e.dataTransfer.getData('text');
  const draggedElem = document.getElementById(id);
  e.target.appendChild(draggedElem);
});

// Refreshing the styles after operation is over:

draggable.addEventListener('dragend', (e) => {
  if(e.target.matches('.item')) {
    e.target.removeAttribute('id');
    e.target.style.backgroundColor = '#efefef';
  }
});

dropzone.addEventListener('dragend', (e) => {
  if(e.target.matches('.item')) {
    e.target.removeAttribute('id');
    e.target.style.backgroundColor = '#efefef';
  }
});







