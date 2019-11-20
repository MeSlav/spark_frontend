/* Treci slajd */
// console.log('document.URL :', document.URL); // URL on which our website/document is currently loaded
// console.log('document.head :', document.head); // Content of the <head> ... </head> tag
// console.log('document.body :', document.body);  // Content of the <body> ... </body> tag
// console.log('document.title :', document.title);  // Title of our website/document
// console.log('document.anchors :', document.anchors);  // All <a> tags on our page that containe name="" attribute
// console.log('document.forms :', document.forms);  // All <form> tags on our page
// console.log('document.scripts :', document.scripts);  // All <script> tags on our page
// console.log('document.images :', document.images);  // All <img /> tags on our page

/* Cetvrti slajd */
// document.write('Test1'); // Writes directly in body tag
// document.writeln('Test2'); // Writes directly in body tag with an newline char after each statement
// document.open(); // Opens up new document
// document.close(); // Closes existing document for writing, i.e. .write() or .writeln() methods will open up new documents instead of writing on the same one
// window.open(); // Opens up new tab

/* Peti slajd */

const divOne = document.createElement('div');
divOne.innerHTML = 'Test1';
document.body.appendChild(divOne);

const divTwo= document.createElement('div');
divTwo.innerHTML = 'Test2';
document.body.insertBefore(divTwo, divOne);

/* Sedmi slajd */

const elem = document.querySelector('.my-class');
// console.log('elem:', elem);
const elems = document.querySelectorAll('.my-class');
// console.log('elems:', elems);
const myDiv = document.getElementById('example');
// console.log('myDiv:', myDiv);

const listOne = document.getElementsByName('list');
// console.log('listOne:', listOne);
const listTwo = document.getElementsByClassName('list');
// console.log('listTwo:', listTwo);
const listThree = document.getElementsByTagName('li');
// console.log('listThree:', listThree);
const first = document.getElementsByTagName('li')[0];
// console.log('first:', first);

/* Osmi slajd */

const newDiv = document.createElement('div');
newDiv.setAttribute('id', 'example');
newDiv.setAttribute('style', 'color:#f00;z-index:1;');
newDiv.innerHTML = 'Tekst koji smo unijeli kako bi vidjeli promjenu stila.'
// console.log(newDiv);
document.body.appendChild(newDiv);

const text = elem.textContent;
const moreText = elem.innerText;
const html = elem.innerHTML;

/* Za vježbu */
const button = document.createElement('button');
button.innerHTML = 'Submit';
document.body.insertBefore(button, document.body.firstElementChild);

