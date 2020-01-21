/* function Person (firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
};

Person.prototype.fullName = function() {
  return this.firstName + ' ' + this.lastName;
}

function Author (firstName, lastName, books, genre) {
  // Passing props to parent constructor. Super();
  Person.call(this, firstName, lastName);
  this.books = books;
  this.genre = genre;
};

// Prototype inheritance
Author.prototype = Object.create(Person.prototype);

// Method not available on instance but looked higher at the prototype chain
Author.prototype.fullNameReversed = function () {
  return this.lastName + ' ' + this.firstName;
};

// Static method
Author.staticProp = function () {
  return 'propertz';
};
*/

class Person {
  constructor(name) {
    this.name = name;
  };
};

class Author extends Person {
  constructor(name, book, genre) {
    super(name);
    this.book = book;
    this.genre = genre;
  };
};

class Book {
  constructor(title, genre, author) {
    this.title = title;
    this.genre = genre;
    this.author = author;
  };
};

const Library = function() {
  const books = [];
  const authors = [];

  const addAuthor = (name, genre, book) => {
    const author = new Author(name, genre, book);
    authors.push(author);
  };

  const addBook = (title, genre, author) => {
    const book = new Book(title, genre, author);
    books.push(book);
  };

  const searchAuthors = search => authors.filter(author => author.name.match(new RegExp(search, 'i')));

  const searchBooks = search => books.filter(book => book.title.match(new RegExp(search, 'i')));

  return {
    addBook,
    addAuthor,
    searchBooks,
    searchAuthors,
  };
};

const library = Library();

const createTableRow = (item) => {
  const tr = document.createElement('tr');

  Object.keys(item).forEach(key => {
    const td = document.createElement('td');
    td.textContent = item[key];
    tr.appendChild(td);
  });

  return tr;
};

/* AUTHOR */
const authorSearch = document.getElementById('author-search');
const authorTable = document.getElementById('author-table');
const authorForm = document.getElementById('author-form');

authorForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const { name, genre, book } = e.target.elements;
  console.log(book);
  library.addAuthor(name.value, genre.value, book.value)
  renderAuthorTable(authorSearch.value);
}, false);

const renderAuthorTable = (search) => {
  const authors = library.searchAuthors(search);

  while (authorTable.rows.length > 1) {
    authorTable.lastElementChild.remove();
  }

  authors.forEach(author => authorTable.appendChild(createTableRow(author)));
};

authorSearch.addEventListener('keyup', (e) => renderAuthorTable(e.target.value), false);

/* BOOK */
const bookSearch = document.getElementById('book-search');
const bookTable = document.getElementById('book-table');
const bookForm = document.getElementById('book-form');

bookForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const { title, genre, author } = e.target.elements;
  library.addBook(title.value, genre.value, author.value);
  renderBookTable(bookSearch.value);
}, false);

const renderBookTable = (search) => {
  const books = library.searchBooks(search);

  while (bookTable.rows.length > 1) {
    bookTable.lastElementChild.remove();
  }

  books.forEach(book => bookTable.appendChild(createTableRow(book)));
};

bookSearch.addEventListener('keyup', (e) => renderBookTable(e.target.value), false);
