const div = document.createElement('div');
div.setAttribute('id', 'container');

const imgLinks = [
  'https://www.thegamecrafter.com/overlays/smallsquareboard.png',
  'https://www.thegamecrafter.com/overlays/smallsquareboard.png',
  'https://www.thegamecrafter.com/overlays/smallsquareboard.png',
  'https://www.thegamecrafter.com/overlays/smallsquareboard.png',
  'https://www.thegamecrafter.com/overlays/smallsquareboard.png',
];

for( var i = 0; i<5; i++ ) {
  const article = document.createElement('article');

  const h1 = document.createElement('h1');
  h1.setAttribute('class', 'title');
  h1.innerHTML = `Naslov ${i}`;

  const img = document.createElement('img');
  img.setAttribute('src', imgLinks[i]);
  img.setAttribute('width', '100');
  img.setAttribute('height', '100');

  const p = document.createElement('p');
  p.setAttribute('class', 'content');
  p.innerHTML = `Paragraf ${i}`;

  const a = document.createElement('a');
  a.setAttribute('class', 'read-more');
  a.innerHTML = `Link ${i}`;

  article.insertBefore(h1, article.firstElementChild);
  article.insertBefore(img, article.firstElementChild);
  article.insertBefore(p, article.firstElementChild);
  article.insertBefore(a, article.firstElementChild);
  article.insertBefore(document.createElement('hr'), article.firstElementChild);

  div.insertBefore(article, div.firstElementChild);
};


// Koristim IFFY funkciju da ima vlastiti lokalni scope
// Jer sam pri dnu opet deklarirao konstantu 'a' i izbacuje mi error
(function() {
  const article = document.createElement('article');

  const h1 = document.createElement('h1');
  h1.setAttribute('class', 'title');
  h1.innerHTML = `Naslov 1`;

  const img = document.createElement('img');
  img.setAttribute('src', 'https://www.thegamecrafter.com/overlays/smallsquareboard.png');
  img.setAttribute('width', '100');
  img.setAttribute('height', '100');

  const p = document.createElement('p');
  p.setAttribute('class', 'content');
  p.innerHTML = `Paragraf 1`;

  const a = document.createElement('a');
  a.setAttribute('class', 'read-more');
  a.innerHTML = `Link 1`;

  article.insertBefore(h1, article.firstElementChild);
  article.insertBefore(img, article.firstElementChild);
  article.insertBefore(p, article.firstElementChild);
  article.insertBefore(a, article.firstElementChild);
  article.insertBefore(document.createElement('hr'), article.firstElementChild);

  div.insertBefore(article, div.firstElementChild);
})();

document.body.insertBefore(div, document.body.firstElementChild);

// Nastavak zadace

div.removeChild(div.lastElementChild);

for (let i=0; i < div.childElementCount-1; i++) {
  for (let j=i+1; j < div.childElementCount; j++) {
    if(div.children[i].isEqualNode(div.children[j])){
      div.removeChild(div.children[j]);
    }
  }
}

div.appendChild(div.replaceChild(div.lastElementChild, div.firstElementChild));

const a = document.createElement('a');
a.setAttribute('href','https://www.google.com/');
a.innerHTML = "Google";

div.lastElementChild.previousElementSibling.appendChild(a);

for(let i=0; i<div.childElementCount; i++){
  if(i%2 === 1){
    div.children[i].setAttribute('style','background-color:red');
  } else {
    div.children[i].setAttribute('style','background-color:blue');
  }
}

const css = document.createElement('link');
css.setAttribute('rel','stylesheet');
css.setAttribute('type','text/css');
css.setAttribute('href','css/style.css');