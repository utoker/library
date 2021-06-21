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
  `did not read`
);
console.log(theHobbit.info());

let library = [];
library.push(theHobbit);
function addBookToLibrary(book) {
  library.push(book);
}
addBookToLibrary(theHobbit);
console.dir(library);

const bookContainer = document.querySelector("#container");
function generateLibrary(library) {
  for (let i = 0; i < library.length; i++) {
    let cardDiv = document.createElement("div");
    cardDiv.classList.add("card");
    bookContainer.appendChild(cardDiv);
    let cardTitle = document.createElement("div");
    cardDiv.appendChild(cardTitle);
    cardTitle.textContent = `${library[i].title}`;
    let cardP = document.createElement("p");
    cardDiv.appendChild(cardP);
    cardP.textContent = `${library[i].author} by ${library[i].title}, ${library[i].pages}, ${library[i].read}`;
  }
}

generateLibrary(library);
