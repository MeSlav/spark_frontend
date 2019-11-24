const input = document.createElement('input');
input.setAttribute('type', 'number');
document.body.insertBefore(input, document.body.firstElementChild);

/*
input.addEventListener('focus', function(event) {
  input.style.fontWeight = 'bold';
});

input.addEventListener('blur', function(event) {
  input.style.fontWeight = 'normal';
});
*/

input.addEventListener('focusin', function(event) {
  input.style.fontWeight = 'bold';
});

input.addEventListener('focusout', function(event) {
  input.style.fontWeight = 'normal';
});

input.addEventListener('input', function (event) {
  input.style.borderColor = parseInt(event.target.value) % 2 === 1
    ? 'blue'
    : 'red';
})

let inputDisabled = false;

document.addEventListener('keydown', function (event) {
  if (event.keyCode === 27) {
    event.target.value = '';
  } else if (event.keyCode === 13) {
    inputDisabled = !inputDisabled;
    if (inputDisabled) {
      input.setAttribute('disabled', '');
    } else {
      input.removeAttribute('disabled');
    }
  }
})

input.addEventListener('paste', function (event) {
  event.preventDefault();
})