const div = document.createElement('div');
div.setAttribute('id', 'container');
div.setAttribute('style', 'max-height: 150px;');
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