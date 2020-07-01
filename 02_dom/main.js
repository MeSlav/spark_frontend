const div = document.createElement('div');
div.setAttribute('id', 'container');
document.body.insertBefore(div, document.body.firstElementChild);

const ul = document.createElement('ul');

ul.setAttribute('id', 'list');

for(let i = 1; i<=10; i++) {
  const li = document.createElement('li');
  li.innerHTML = i;
  ul.append(li);
};

div.insertBefore(ul, div.firstElementChild);

console.log('childElementCount', ul.childElementCount);
console.log('clientHeight', ul.clientHeight);
console.log('clientWidth', ul.clientWidth);

// Nastavak, onscroll event:

div.style.maxHeight = '150px'
div.style.overflow = 'scroll';
div.addEventListener('scroll', function(event) {
  const elem = event.target;
  const diff = elem.scrollHeight - elem.clientHeight;
  if(elem.scrollTop >= diff) {
    console.log('AAA');
  }
})