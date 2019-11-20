/* Šesti slajd - Zadatak 1 */
const ulList = document.createElement('ul');

// document.body.appendChild(ulList); // This method would append this element as the last tag inside of <body></body>

document.body.insertBefore(ulList, document.body.firstElementChild); // This method appends this element as the first tag inside of <body></body>

const lista = [
  'banane',
  'jabuke',
  'cigare',
  'zvake',
  'sunka',
  'mlijeko',
  'pahuljice',
  'kruh',
  'jaja',
  'meso',
];

for (var i = 0; i < lista.length; i++) {
  const liItem = document.createElement('li');
  liItem.innerHTML = lista[i];
  ulList.appendChild(liItem);
}
