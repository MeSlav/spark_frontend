// Deklariranje i inicijalizacija HTMLElement-a
const divOne = document.createElement('div');
const divTwo = document.createElement('div');

// Pridruzivanje vrijednosti za innerHTML
divOne.innerHTML = 'divOne';
divTwo.innerHTML = 'divOne';

// Pridruzivanje kreiranih dokumenata htmlu
document.body.appendChild(divOne);
divOne.appendChild(divTwo);

// Nadodajemo inicijalne css vrijednosti
divOne.style.height = '100px';
divOne.style.backgroundColor = 'red';
divTwo.style.height = '50px';
divTwo.style.backgroundColor = 'yellow';

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
};

// .onclick se razlikuje od .addEventListener('click'),
// tako sto ga mozemo samo jednom deklarirati,
// jer bi ga svaki sljedeci put zapravo overwrite-ali
// dok .addEventListenera, kao na primjeru ispod mozemo staviti vise

divOne.onclick = function (event) {
  event.stopPropagation();
  const rand = getRandomInt(3);
  console.log(rand);
  const colors = [
    'red',
    'green',
    'blue',
  ];
  divOne.style.backgroundColor = colors[rand];
};

divTwo.addEventListener('click', function (event) {
  event.stopPropagation();
  const rand = getRandomInt(3);
  const colors = [
    'yellow',
    'purple',
    'black',
  ];
  divTwo.style.backgroundColor = colors[rand];
});

divTwo.addEventListener('click', function (event) {
  console.log('EVENT za div 2: ', event);
});


