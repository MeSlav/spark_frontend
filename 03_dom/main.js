const div = document.createElement('div');
document.body.appendChild(div);
div.style.backgroundColor = 'red';
div.style.height = '200px';
div.style.width = '200px';

const input = document.createElement('input');
document.body.appendChild(input);

div.addEventListener('click', function(event) {
  console.log(event);
});

div.addEventListener('dblclick', function(event) {
  console.log(event);
});

// Desni klik
div.addEventListener('contextmenu', function(event) {
  console.log(event);
});

div.addEventListener('mouseup', function(event) {
  console.log(event);
});

div.addEventListener('mousedown', function(event) {
  console.log(event);
});

/*
div.addEventListener('mousemove', function(event) {
  console.log(event);
});

div.addEventListener('mouseover', function(event) {
  console.log(event);
});

div.addEventListener('mouseout', function(event) {
  console.log(event);
});
*/

div.addEventListener('mouseenter', function(event) {
  console.log(event);
});

div.addEventListener('mouseleave', function(event) {
  console.log(event);
});

input.addEventListener('keydown', function(event) {
  console.log(event.type);
});

input.addEventListener('keypress', function(event) {
  console.log(event.target);
});

input.addEventListener('keyup', function(event) {
  console.log(event.target.value);
});

div.addEventListener('online', function(event) {
  console.log(event);
});

div.addEventListener('offline', function(event) {
  console.log(event);
});

