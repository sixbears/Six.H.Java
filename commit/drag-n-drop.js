'use strict';

const ACCEPTED_FORMATS = ['image/jpeg', 'image/png', 'image/svg'];
const MAX_IMG_SIZE = 300 * 1024; // 30 Kb
const dropZone = document.querySelector('#js-drop-to');
const filesList = document.querySelector('#js-file-list');

dropZone.addEventListener('dragover', (e) => onDragOver(e));            // evite le comportement par default qui ets d'ouvrir le fichier
dropZone.addEventListener('drop', (e) => onDrop(e));                    // Permet de lacher le fichier et de le telecharger
dropZone.addEventListener('dragenter', () => changeDropZoneState(true));// permet de detecter si le drag est au dessus de la div de drop
dropZone.addEventListener('dragleave', () => changeDropZoneState(false));//permet de detecter si le drag sort de la div de drop

// evite le comportement par default --> ouvrir le fichier
function onDragOver(event) {
  event.stopPropagation();
  event.preventDefault();
}

// telecharge le fichier 
function onDrop(e) {
  e.stopPropagation();
  e.preventDefault();
  filesList.innerHTML = '';
  const filesUploaded = Array.from(e.dataTransfer.files);
  filesUploaded.forEach((file, index) => handleUploadedFile(file, index));
  changeDropZoneState(false);
}

// Change la couleur du cadre quand on survole la div avec le drag
function changeDropZoneState(isDragging) {
  isDragging ? 
    dropZone.classList.add('js-is-dragged-over') :
    dropZone.classList.remove('js-is-dragged-over');
}

// gere en cas d'erreur d'upload
function handleUploadedFile(file, index) {
  const error = getUploadError(file);
  error ?
    console.warn(`"${file.name}" Upload Error: ${error}`) :
    filesList.appendChild(createListEl(file, index));
}

// créer la ligne dans laquelle se retrouveront les informations du telechargement (image et name)
function createListEl(file, index) {
  const el = document.createElement('li');
  el.setAttribute('id', 'file-list-item-'+index);
  el.className = 'list-group-item file-list-item';

  // add image
  const elPreview = document.createElement('img');
  elPreview.classList.add('file-list-item-preview');
  el.appendChild(elPreview);
  renderImage(file, 'file-list-item-'+index);

  // add name
  const elName = document.createElement('p');
  elName.classList.add('file-list-item-name');
  elName.innerText = file.name;
  el.appendChild(elName);

  return el;
}

function renderImage(file, elId) {
  const reader = new FileReader();
  reader.onload = (e) => {
    const img = document.querySelector(`#${elId} img`);
    img.setAttribute('src', e.target.result);
  }
  reader.readAsDataURL(file);
}

function getUploadError(file) {
  if (file.size > MAX_IMG_SIZE) {
    return 'Your image is too big';
  } else if (!ACCEPTED_FORMATS.includes(file.type)) {
    return 'Image of this format is not accepted';
  } else {
    return;
  }
}