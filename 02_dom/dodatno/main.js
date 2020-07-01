const dom = [
  {
    attributes: {
      id: 'list',
      class: 'divs',
      onclick: 'console.log("Clicked")'
    },
    children: [
      {
        tagName: 'ul',
        children: [
          {
            tagName: 'li',
            innerHTML: 'Prvi item'
          },
          {
            tagName: 'li',
            innerHTML: 'Drugi item'
          },
          {
            tagName: 'li',
            innerHTML: 'Treci item'
          },
        ]
      }
    ],
  },
  {
    tagName: 'form',
    attributes: {
      novalidate: null,
      name: 'form',
    },
    children: [
      {
        attributes: {
          class: 'form__item'
        },
        children: [
          {
            tagName: 'label',
            innerHTML: 'Ime:'
          },
          {
            tagName: 'input',
            attributes: {
              type: 'text',
              name: 'ime',
            },
          }
        ],
      },
      {
        attributes: {
          class: 'form__item'
        },
        children: [
          {
            tagName: 'label',
            innerHTML: 'Prezime:'
          },
          {
            tagName: 'input',
            attributes: {
              type: 'text',
              name: 'prezime',
            },
          }
        ],
      }
    ]
  },
]

const body = document.body;
body.insertBefore(domBuilder(dom), body.firstElementChild);