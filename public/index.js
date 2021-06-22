
let library = [];
const bookContainer = document.querySelector("#container");
const newBook = document.querySelector(`.new-book`);
const bookForm = document.querySelector(`.form`);
const submit = document.querySelector(`.submit`)
newBook.addEventListener(`click`,newBookForm);
submit.addEventListener(`click`,submitForm)

function submitForm() {
  bookForm.style.display = "none";
  bookContainer.style.display = "grid";
  newBook.style.display = "block";
}
function newBookForm() {
  bookForm.style.display = "block";
  bookContainer.style.display = "none";
  newBook.style.display = "none";
}
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
library.push(theHobbit);
const theHobbit2 = new Book(
  `asdasdasdasdasdsa`,
  `J.R.R Tolkien`,
  `295 pages`,
  `did not read`
);
library.push(theHobbit2);
const theHobbit3 = new Book(
  `12312312312`,
  `J.R.R Tolkien`,
  `295 pages`,
  `did not read`
);
library.push(theHobbit3);


function addBookToLibrary(book) {
  library.push(book);
}
function generateLibrary(library) {
  for (let i = 0; i < library.length; i++) {
    let cardDiv = document.createElement("div");
    cardDiv.classList.add(`c${[i]}`);
    cardDiv.dataset.index=`${i}`
    bookContainer.appendChild(cardDiv);
    let cardTitle = document.createElement("div");
    cardTitle.classList.add("card-title");
    cardDiv.appendChild(cardTitle);
    cardTitle.textContent = `${library[i].title}`;
    let cardP = document.createElement("p");
    cardDiv.appendChild(cardP);
    cardP.textContent = `${library[i].author} by ${library[i].title}, ${library[i].pages}, ${library[i].read}`;
    let cardButton = document.createElement("button");
    cardButton.classList.add(`a${i}`);
    cardButton.textContent = "Delete";
    cardButton.addEventListener(`click`,deleteBook)
    cardDiv.appendChild(cardButton);
  }
} 
generateLibrary(library);

function deleteBook(){
this.parentElement.remove()
}