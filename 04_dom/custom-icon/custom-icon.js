const template = document.createElement('template');
template.innerHTML = `
  <style>
    :host {
      display: block;
    }

    slot {
      color: red;
      font-size: inherit;
      padding: 10px;
      border-radius: 4px;
      border: 1px solid var(--component-border-color, ivory);
      width: 100%;
    }
  </style>
  <slot name="icon">&#11036;</slot>
  <slot name="text">Default</slot>
`;

customElements.define('custom-icon', class CustomIcon extends HTMLElement {
  /* get static */

  constructor() {
    super();

    // Adding shadow DOM by selecting template element
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));

    // Binding this to custom functions
    this.shine = this.shine.bind(this);

    // Adding event listeners
    this.addEventListener('click', this.shine);
  }

  // Custom methods:
  $(selector) {
    const element = this.shadowRoot && this.shadowRoot.querySelector(selector);
    const elements = this.shadowRoot && this.shadowRoot.querySelectorAll(selector);
    return elements.length > 1 ? elements : element;
  }

  shine(e) {
    console.log(e);
  }

  // Lifecycle hooks:
  connectedCallback() {
    this.$('[name="icon"]').innerHTML = this.hasAttribute('icon') ? '&#' + this.getAttribute('icon') + ';' : 'Missing icon';
    this.$('[name="text"]').textContent = this.hasAttribute('text') ? this.getAttribute('text') : 'Missing name';
  }
});

export default function hello(x) {
  return 'hello ' + x ;
}