// Ovaj primjer je inspiriran primjerima Ante Bule, Miralema Avdica, Ivana Bagarica i Josipa Paradzika.

(function() {
  const dropzone = document.querySelector('#dropzone');
  const reset = document.querySelector('#reset');

  // Preventing default and stopping propagation for every dropzone drag and drop event
  ['drop', 'dragover', 'dragleave'].forEach(event => dropzone.addEventListener(event, e => {
    e.preventDefault();
    e.stopPropagation();
  }, false));

  dropzone.ondragover = function () {
    this.className = 'dropzone dragover';
  };

  dropzone.ondragleave = function() {
    this.className = 'dropzone idle';
  };

  dropzone.ondrop = function (e) {
    let text = '\n';
    this.className = 'dropzone dropped';
    const filesArr = Array.from(e.dataTransfer.files);
    filesArr.forEach((file, i) => {
      text += `${i+1}. datoteka:\n`;
      text += `Naziv datoteke je: ${file.name}\n`;
      text += `Veličina datoteke je: ${file.size / 1000} kb\n`;
      text += `Zadnji put datoteka je modificirana prije ${Math.round((new Date() - file.lastModified)/1000/60/60/24/345.25)} dana!\n`;
      text += filesArr.length === i + 1 ? '\n' : '__________________________________\n\n';
    });
    console.log(text);
  };

  reset.addEventListener('click', e => {
    dropzone.className = 'dropzone idle';
    console.clear();
  }, false);
})();
