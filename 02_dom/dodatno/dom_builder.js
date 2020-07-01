/**
 * Array of DOM element definitions
 * @typedef {Object[]} Elements
 * @property {string} [tagName="div"] - Tag name with a default value of 'div'.
 * @property {Object=} attributes - List of attributes as key value pairs. Attributes without HTML value should have null as passed value.
 * @property {string=} innerHTML - Adds innerHTML value to an element.
 * @property {Elements=} children - Accepts same params as the function does.
 */

/**
 *
 * @param {Elements} elements
 */
function createElements(elements) {
  if (!elements) return; // console.error('ERROR:', 'Recieved an empty object!');
  else if (!Array.isArray(elements)) return; // console.error('ERROR:', `Imported parameter should be an array, instead we've recieved ${typeof elements}`);

  let htmlElements = elements.map(({
    tagName = 'div',
    attributes,
    children,
    innerHTML,
  }) => {
    const htmlElement = document.createElement(tagName);

    htmlElement.innerHTML = innerHTML || '';

    if (typeof attributes === 'object') {
      Object.keys(attributes).forEach(key => {
        attributes[key]
          ? htmlElement.setAttribute(key, attributes[key])
          : htmlElement.setAttribute(key, '');
      });
    }

    if (Array.isArray(children)) {
      createElements(children).forEach(element => {
        htmlElement.appendChild(element);
      })
    }

    return htmlElement;
  });

  return htmlElements;
}

function domBuilder(elements) {
  const DOM = document.createElement('div');
  const htmlElements = createElements(elements);
  htmlElements.forEach(element => {
    DOM.appendChild(element);
  })
  return DOM;
}