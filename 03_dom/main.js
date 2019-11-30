const mouse = document.getElementById('mouse');
const keyboard = document.getElementById('keyboard');
const button = document.getElementById('botun');

button.addEventListener('click', (e) => {
  e.stopPropagation();
  e.preventDefault();
}, false);

window.addEventListener('offline', (e) => {
  if (e.type === 'online') {
    // requests to the server
  } else {
    // requests to the browser memory
  }
});

window.addEventListener('load', (e) => {
  console.log(e);
}, false);
window.addEventListener('unload', (e) => {
  console.log(e);
}, false);
window.addEventListener('beforeunload', (e) => {
  console.log(e);
}, false);

window.addEventListener('scroll', (e) => {
  console.log(e);
}, false);
window.addEventListener('resize', (e) => {
  console.log(e);
}, false);

mouse.addEventListener('click', function(event) {
  console.log(event);
});

mouse.addEventListener('dblclick', function(event) {
  console.log(event);
});

// Desni klik
mouse.addEventListener('contextmenu', function(event) {
  console.log(event);
});

mouse.addEventListener('mousedown', function(event) {
  console.log(event.type);
});

mouse.addEventListener('click', function(event) {
  console.log(event.type);
});

mouse.addEventListener('mouseup', function(event) {
  console.log(event.type);
});


/* mouse.addEventListener('mousemove', function(event) {
  console.log(event);
}); */

/*
document.addEventListener('mouseover', function(event) {
  event.preventDefault();
});
 */

/*
mouse.addEventListener('mouseout', function(event) {
  console.log(event);
});
 */

/* mouse.addEventListener('mouseenter', function(event) {
  console.log(event);
});

mouse.addEventListener('mouseleave', function(event) {
  console.log(event);
}); */

keyboard.addEventListener('keydown', function(event) {
  console.log(event.type);
});

keyboard.addEventListener('keypress', function(event) {
  console.log(event.target);
});

keyboard.addEventListener('keyup', function(event) {
  console.log(event.target.value);
});

window.addEventListener('online', function(event) {
  console.log(event);
});

window.addEventListener('offline', function(event) {
  console.log(event);
});

