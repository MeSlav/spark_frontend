  const items = document.getElementsByClassName('item');
  const app = document.getElementById('app');
  const todo = document.getElementById('todo');
  const contextmenu = document.getElementById('contextmenu');

  // Context menu:

  /* app.addEventListener('contextmenu', (e) => {
    if(e.target && e.target.matches('.item')) {
      e.preventDefault();
      contextmenu.style.display = true;
      contextmenu.style.left = `${left}px`;
      contextmenu.style.top = `${top}px`;
    };
  }); */

  // Starting the drag:

  app.addEventListener('dragstart', (e) => {
    if(e.target && e.target.matches('.item')) {
      e.target.setAttribute('id', 'dragged');
      e.dataTransfer.setData('text/plain', e.target.id);
    }
  });

  // Registering the dropzone with dragover:

  app.addEventListener('dragover', (e) => {
    if(e.target && e.target.matches('.dropzone')) {
      e.preventDefault();
    }
  });

  // Droping the cargo:

  app.addEventListener('drop', (e) => {
    if(e.target && e.target.matches('.dropzone')) {
      const id = e.dataTransfer.getData('text');
      const draggedElem = document.getElementById(id);
      e.target.appendChild(draggedElem);
    }
  });

  // Refreshing the styles after operation is over:

  app.addEventListener('dragend', (e) => {
    if(e.target && e.target.matches('.item')) {
      e.target.removeAttribute('id');
    }
  });

  // Create a modal

  const dialog = document.getElementsByTagName('dialog')[0];

  document.addEventListener('click', (e) => {
    const dialogArea = dialog.getBoundingClientRect();
    const isInDialog = (
      dialogArea.top <= e.clientY &&
      e.clientY <= dialogArea.top + dialogArea.height &&
      dialogArea.left <= e.clientX &&
      e.clientX <= dialogArea.left + dialogArea.width
    );
    isInDialog || dialog.close();
  });

  document.addEventListener('keydown', (e) => {
    const keyCode = e.target && e.target.keyCode;
    if (keyCode === 27) {
      dialog.close();
    }
  });

  const phab = document.getElementById('phab');
  phab.addEventListener('click', (e) => {
    e.stopPropagation();
    dialog.showModal();
  });

  const form = document.getElementById('form');
  form.addEventListener('submit', (e) => {
    const newTodo = document.createElement('div');
    newTodo.setAttribute('class', 'item');
    newTodo.setAttribute('draggable', 'true');
    newTodo.innerText = e.target.elements['innerText'].value;
    todo.insertBefore(newTodo, todo.firstElementChild);
  });