const host = document.querySelector('#shadow-host');

// Najbitnija linija:
const shadow = host.attachShadow({ mode: 'open' });

const div = document.createElement('div');
div.setAttribute('class', 'item');
div.setAttribute('id', 'item');
div.innerText = 'Shadow tekst';
shadow.appendChild(div);

// Nadodavanje CSSa unutar našeg shadow DOM-a
const style = document.createElement('style');
/*
style.setAttribute('rel', 'stylesheet');
style.setAttribute('type', 'text/css'); */
style.textContent = `
  .item {
    color: blue;
  }
`;
shadow.insertBefore(style, shadow.firstElementChild);

// Nadodavanje JavaScripta unutar našeg shadow DOM-a
const script = document.createElement('script');
script.textContent = `

  const item = shadow.getElementById('item');
  item.addEventListener('click', (e) => {
    console.log(e);
  });
`;
shadow.appendChild(script);









/*
console.log(shadowHost.shadowRoot);
console.log(shadow);

const closedShadowHost = document.createElement('div');
closedShadowHost.setAttribute('id', 'closed-shadow-host');
const closedShadowHostSpan = document.createElement('span');
closedShadowHostSpan.innerText = 'Closed shadow host span innerText';
closedShadowHost.appendChild(closedShadowHostSpan);
document.body.insertBefore(closedShadowHost, document.getElementsByTagName('script')[0]);

// Closed shadow mode
const closedShadow = closedShadowHost.attachShadow({ mode: 'closed' });
closedShadow.appendChild(div.cloneNode(true));

console.log(closedShadowHost.shadowRoot);
console.log(closedShadow);
*/