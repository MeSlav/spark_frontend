
class AppDialog extends HTMLDialogElement {
  constructor() {
    super();

    // Funkcionalnost elementa pisemo ovdje:

    // Shadow root:
    const shadow = this.attachShadow({ mode: 'open' });

    const wrapper = document.createElement('div');
    wrapper.setAttribute('class', 'wrapper');

    const h4 = document.createElement('h4');
    wrapper.appendChild(h4);

    const form = document.createElement('form');
    form.setAttribute('class', 'form');
    wrapper.appendChild(form);

    const innerHTMLInput = document.createElement('input');
    innerHTMLInput.setAttribute('class', 'innerHTML-input');
    form.appendChild(innerHTMLInput);

    const submitInput = document.createElement('input');
    submitInput.setAttribute('type', 'submit');
    submitInput.setAttribute('class', 'submit-input');
    form.appendChild(submitInput);

    h4.innerText = this.hasAttribute('header') ? this.getAttribute('header') : 'Default header';

    const style = document.createElement('style');
    style.textContent = `
      .wrapper {
        color: red;
      }
    `;

    shadow.appendChild(style);
    shadow.appendChild(wrapper);
  }

  connectedCallback() {
    // Poziva se kad pripojimo element DOM-u
    console.log('connectedCallback');
  }

  disconnectedCallback() {
    // Poziva se kad odspojimo element iz DOM-a
    console.log('disconnectedCallback');
  }

  attributeChangedCallback() {
    // Poziva se kad promijenimo atribut
    console.log('attributeChangedCallback');
  }

  adoptedCallback() {
    // Poziva se kad custom element premjestimo u novi dokument
    console.log('adoptedCallback');
  }
}

CustomElementRegistry.define('app-dialog', AppDialog, { extends: 'dialog' })
