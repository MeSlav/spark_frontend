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
}

document.body.insertBefore(div, document.body.firstElementChild);