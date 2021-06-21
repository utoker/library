function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function () {
    return `${this.title}by ${this.author} ,${this.pages}, ${this.read}`;
  };
}

const theHobbit = new Book(
  `The Hobbit`,
  `J.R.R Tolkien`,
  `295 pages`,
  `not read`
);
console.log(theHobbit.info());

let library = [];
function addBookToLibrary(book) {
  library.push(book);
}
addBookToLibrary(theHobbit);
library;
