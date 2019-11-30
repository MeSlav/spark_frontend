const myElement = document.createElement('my-element');
myElement.setAttribute('text', 'Neki tekst!');
document.body.insertBefore(myElement.cloneNode(true), document.body.firstElementChild);
document.body.insertBefore(myElement.cloneNode(true), document.body.firstElementChild);
document.body.insertBefore(myElement.cloneNode(true), document.body.firstElementChild);
const template = document.getElementById('my-template');

class MyElement extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: 'open' });

    const text = this.hasAttribute('text') ? this.getAttribute('text') : 'Rendom text';

    const div = document.createElement('div');
    div.setAttribute('id', 'my-element-div');
    div.textContent = text;
    shadow.appendChild(div);
    shadow.appendChild(template.content.cloneNode(true))

    const style = document.createElement('style');
    style.textContent = `
      #my-element-div {
        color: red;
      }
    `;
    shadow.insertBefore(style, shadow.firstElementChild);
  }

  connectedCallback() {
    console.log('Element prisiven domu!');
  }
  disconnectedCallback() {
    console.log('Element prisiven domu!');
  }
  attributeChanged() {
    console.log('Element prisiven domu!');
  }
}

customElements.define('my-element', MyElement);
