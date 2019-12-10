/* PRVI ZADATAK */

// Programski generiraj formular sa tri input polja i dva gumba
const form = document.createElement('form');

const username = document.createElement('input');
let usernameValid = false;
username.setAttribute('id', 'username');
form.appendChild(username);

const password = document.createElement('input');
let passwordValid = false;
password.setAttribute('id', 'password');
form.appendChild(password);

const repeatPass = document.createElement('input');
let repeatPassValid = false;
repeatPass.setAttribute('id', 'repeatPass');
form.appendChild(repeatPass);

// Poruka u kojoj ćemo ispisivati poruke validacije
const message = document.createElement('p');
form.appendChild(message);

const reset = document.createElement('button');
reset.setAttribute('id', 'reset');
reset.textContent = 'Reset';
form.appendChild(reset);

const submit = document.createElement('button');
submit.setAttribute('id', 'submit');
submit.textContent = 'Submit';
form.appendChild(submit);

// Minimalno 5 znakova i maksimalno 16
const isTooLengthy = length => {
  return (length < 5 || length > 16);
};

// Nedopusten unos ikakvih znakova osim slova i brojeva
const isLetterOrNumber = charCode => {
  return (charCode >= 48 && charCode <= 57) ||
  (charCode >= 65 && charCode <= 90) ||
  (charCode >= 97 && charCode <= 123)
};

// Minimalno jedno veliko slovo, jedan dijakriticki znak i jedan broj
const containsNumberUppercaseDiacritic = value => {
  let number, uppercase, diacritic;
  value.split('').forEach(char => {
    const charCode = char.charCodeAt();
    number = (charCode >= 48 && charCode <= 57) || number;
    uppercase = (charCode >= 65 && charCode <= 90) || uppercase;
    diacritic = (charCode >= 39 && charCode <= 47) || diacritic;
  });

  return number && uppercase && diacritic;
};

document.body.insertBefore(form, document.body.firstElementChild);
let formValid;

// Validaciju vršimo prilikom svakog keyup eventa, jer input ne sadrži .keyCode i .charCode vrijednosti, a keydown i keypress eventi kasne
form.addEventListener('keyup', function(e) {

  // Generalna provjera za svako polje, je li predugačko ili prekratko
  if(isTooLengthy(e.target.value.length)) {
    return e.target.style.borderColor = 'red';
  }

  // Umjesto da napravimo tri razlicita eventListener-a za svaki input, koristeći koncept event delegacije, eventove slušamo u parent elementu u propagacijskoj fazi (capture -> event -> bubbling(propagation))
  switch (e.target.id) {
    case 'username':
      // Pri svakom unosu provjeravamo je li cijela do tad unesena vrijednost ispravna tako sto prvo pomoću .split('') metode podijelimo string na array char-ova, onda provjeravamo je li svaki taj ispunio uvjet (broj ili slovo)
      usernameValid = !e.target.value.split('').find(char => !isLetterOrNumber(char.charCodeAt()));
      e.target.style.borderColor = usernameValid ? 'green' : 'red';
      break;
    case 'password':
      // Cijelu unesenu vrijednost prosljeđujemo u funkciju containsNumberUppercaseDiacritic
      passwordValid = containsNumberUppercaseDiacritic(e.target.value);
      e.target.style.borderColor = passwordValid ? 'green' : 'red';
      break;
    case 'repeatPass':
      // Provjeravamo jesu li jednake vrijednosti password-a i repeatPass-a
      repeatPassValid = password.value === repeatPass.value;
      e.target.style.borderColor = repeatPassValid ? 'green' : 'red';
      break;
  }
}, false);

submit.addEventListener('click', function(e) {
  // Prevent-amo default da se ne bi pri svakom kliku osvježila stranica
  e.preventDefault();
  // Ako je svaka validacija zadovoljena, onda prikazujemo poruku 'Form data sent' iznad button-a, u suprotnom pokazujemo 'Invalid input'.
  message.textContent = (usernameValid && passwordValid && repeatPassValid) ? 'Form data sent' : 'Invalid input';
}, false);

reset.addEventListener('click', function(e) {
  e.preventDefault();
  // Vrijednost svakog input-a vraćamo na null
  username.value = null;
  password.value = null;
  repeatPass.value = null;

  // Resetiranje border-color-a
  username.style.border = null;
  password.style.border = null;
  repeatPass.style.border = null;

  // Resetiramo validaciju na false
  usernameValid = false;
  passwordValid = false;
  repeatPassValid = false;

  // Prikazujemo poruku uspješnog resetiranja
  message.textContent = 'Successfully reseted';
}, false);


/* DRUGI ZADATAK */


// Min/max random number generator
const getRandMinMax = (min, max) => {
  return (Math.floor(Math.random() * (max - min + 1)) + min);
};

// Kreiramo ne numeriranu listu i ubacujemo je u body element prije prvog script taga
const ul = document.createElement('ul');
document.body.insertBefore(ul, document.body.getElementsByTagName('script')[0]);

const generate = document.getElementById('generate');
const colorize = document.getElementById('colorize');
const remove = document.getElementById('remove');

// Varijabla unutar koje spremamo vrijednosti 'colorize' ili 'remove' sukladno zahtjevanim funkcionalnostima u zadatku
let activeButton;

// EventListener za klik na button kojim generiramo listu
generate.addEventListener('click', function (e) {
  // Ovom linijom brišemo staru listu kako bismo napravili novu
  ul.innerHTML = '';

  // U svrhu zadatka pravimo posebni random number generator sa min i max parametrima
  const rand = getRandMinMax(4, 10);
  for(let i = 1; i <= rand; i++) {
    const listItem = document.createElement('li');
    // Generiramo listu ne numeriranih item-a koje ručno numeriramo pomoću indexa u for petlji
    listItem.textContent = i + '. item';
    // Svakom item-u postavljamo attribut draggable u svrhu dodatnog Drag & Drop zadatka
    listItem.setAttribute('draggable', 'true');
    ul.appendChild(listItem);
  };

  // Ovu funkciju pravimo čisto kako bi nam pomogla da se držimo DRY principa (dont-repeat-yourself)
  const returnLink = url => {
    const link = document.createElement('a');
    link.setAttribute('href', 'https://www.' + url);
    link.setAttribute('target', '_blank');
    link.textContent = url.split('.')[0];
    return link;
  }

  // U varijable facebook i google pospremamo gotov izgeneriran anchor element uz pomoć funkcije return link kojoj prosljeđjujemo samo url parametar
  const facebook = returnLink('facebook.com');
  const google = returnLink('google.com');

  // Kreiramo shadow hosta, kojem odmah posle pripajamo shadow DOM
  const shadowHost = document.createElement('div');
  const shadowRoot = shadowHost.attachShadow({ mode: 'open' });

  // Elementu koji je drugi po redu brišemo vrijednost .textContent-a i nadodajemo google anchor kao child element
  ul.firstElementChild.nextElementSibling.textContent = '';
  ul.firstElementChild.nextElementSibling.appendChild(google);

  // Elementu koji je pred zadnji po redu brišemo vrijednost .textContent-a i nadodajemo div unutar kojeg smo nadodali shadow DOM gdje se naposljetku nalazi naš facebook anchor element
  ul.lastElementChild.previousElementSibling.textContent = '';
  ul.lastElementChild.previousElementSibling.appendChild(shadowHost);
  shadowRoot.appendChild(facebook);

  activeButton = null;
});

// Activate Colorize
colorize.addEventListener('click', function (e) {
    activeButton = 'colorize';
}, false);

// Activate Remove
remove.addEventListener('click', function (e) {
  activeButton = 'remove';
}, false);

// Koristeći event delegaciju, registrirati ćemo eventListener samo na ul elementu, koji pomoću propagacije(event bubblinga) prima svaki event svih svojih child elemenata pri povratnoj event bubbling fazi
const colors = ['red', 'green', 'blue'];
ul.addEventListener('click', function(e) {
  console.log(e.target);
  // Provjerom sa e.target.matches(selektor) funkcijom možemo odmah napustiti eventListener u slučaju da se event nije dogodio u elementu koji nas ne zanima, koji je u ovom slučaju li element
  if(!e.target.matches('li')) return false;

  // Ovisno o vrijednosti koju smo spremili u activeButton varijablu, činimo razne komputacije
  if (activeButton === 'colorize') {
    e.target.style.border = '2px solid ' + colors[getRandMinMax(0, 2)];
  } else if (activeButton === 'remove') {
    ul.removeChild(e.target);
  } else {
    console.log('No button is selected!');
  }
}, false);

// Isto kao na prošlom eventListeneru, koristimo event delegaciju i za ovaj i za svaki naredni
ul.addEventListener('mouseover', function(e) {
  if(!e.target.matches('li')) return false;
  e.target.style.backgroundColor = e.target.matches('li') && '#eee';
}, false);

ul.addEventListener('mouseout', function(e) {
  if(!e.target.matches('li')) return false;
  e.target.style.backgroundColor = e.target.matches('li') && '#fafafa'
}, false);

// Drag & Drop
const dropzone = document.createElement('div');
dropzone.style.border = '1px solid black';
dropzone.style.minHeight = '200px';
document.body.insertBefore(dropzone, document.body.getElementsByTagName('script')[0]);

dropzone.addEventListener('dragover', e => e.preventDefault(), false);

ul.addEventListener('dragstart', (e) => {
  if(!e.target.matches('li')) return false;
  e.target.setAttribute('id', 'dragged');
  e.dataTransfer.setData('text', e.target.id);
});

dropzone.addEventListener('drop', (e) => {
  dropzone.appendChild(document.getElementById(e.dataTransfer.getData('text')));
}, false);

dropzone.addEventListener('dragend', e => {
  e.target.removeAttribute('id');
  e.target.removeAttribute('draggable');
}, false);
