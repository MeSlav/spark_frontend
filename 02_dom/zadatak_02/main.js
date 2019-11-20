const divOne = document.createElement('div');
divOne.setAttribute('id', 'one');

const divTwo = document.createElement('div');
divTwo.setAttribute('id', 'two');

document.body.insertBefore(divTwo, document.body.firstElementChild);
document.body.insertBefore(divOne, document.body.firstElementChild);

const divThree = document.createElement('div');
divThree.setAttribute('id', 'three');

document.body.replaceChild(divThree, divOne);

const divTwoClone = divTwo.cloneNode(true);

document.body.appendChild(divTwoClone);

document.body.removeChild(divTwo);

console.dir(divTwo);
console.log('divTwo', document.body.lastElementChild.isEqualNode(divTwo));
console.log('divTwoClone', document.body.lastElementChild.isEqualNode(divTwoClone));

