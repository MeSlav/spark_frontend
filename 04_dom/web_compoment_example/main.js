const random = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const updateStyle = (elem) => {
  const shadow = elem.shadowRoot;
  shadow.querySelector('style').textContent = `
    div {
      width: ${elem.getAttribute('size')}px;
      height: ${elem.getAttribute('size')}px;
      background-color: ${elem.getAttribute('color')};
    }
  `;
};

// Kreiramo klasu za nas element
class Square extends HTMLElement {
  // Specificiramo observedAttributes(), odnosno registriramo atribute cije promjene slusamo, kako bi attributeChangedCallback funkcionirao
  static get observedAttributes() {
    return ['color', 'size'];
  }

  constructor() {
    // Pri svakom naslijeđivanju moramo pozvati super
    super();

    const shadow = this.attachShadow({mode: 'open'});

    const div = document.createElement('div');
    const style = document.createElement('style');
    shadow.appendChild(style);
    shadow.appendChild(div);

    this.hasAttribute('color') || this.setAttribute('color', 'red');
    this.hasAttribute('size') || this.setAttribute('size', '100');
  }

  connectedCallback() {
    console.log('Element dodan na stranicu');
    updateStyle(this);
  }

  disconnectedCallback() {
    console.log('Element uklonjen sa stranice');
  }

  adoptedCallback() {
    console.log('Element pomjeren na drugu stranicu');
  }

  attributeChangedCallback(name, oldValue, newValue) {
    console.log('Promijenjen atribut elementu');
    updateStyle(this);
  }
}

// Element dodajemo u CustomElementRegistry
customElements.define('custom-square', Square);

const square = document.getElementsByTagName('custom-square')[0];

const update = document.querySelector('#update');
update.addEventListener('click', function() {
  square.setAttribute('size', random(50, 200));
  square.setAttribute('color', `rgb(${random(0, 255)}, ${random(0, 255)}, ${random(0, 255)})`);
});

