let library = [];
const bookContainer = document.querySelector("#container");
const newBook = document.querySelector(`.new-book`);
const bookForm = document.querySelector(`.form`);
const submit = document.querySelector(`.submit`);
newBook.addEventListener(`click`, newBookForm);
submit.addEventListener(`click`, submitForm);

function submitForm() {
  let sBook = {
    title: document.querySelector("#form-title").value,
    author: document.querySelector("#form-author").value,
    pages: document.querySelector("#form-pages").value,
  };
  library.push(sBook);
  let a = new Book(
    document.querySelector("#form-title").value,
    document.querySelector("#form-author").value,
    document.querySelector("#form-pages").value
  );
  localStorage.setItem("library", JSON.stringify(a));

  let cardDiv = document.createElement("div");
  cardDiv.classList.add("card-div");
  bookContainer.appendChild(cardDiv);
  let cardTitle = document.createElement("div");
  cardTitle.classList.add("card-title");
  cardDiv.appendChild(cardTitle);
  cardTitle.textContent = `${document.querySelector("#form-title").value}`;
  let cardP = document.createElement("p");
  cardDiv.appendChild(cardP);
  cardP.textContent = `${document.querySelector("#form-title").value} by ${
    document.querySelector("#form-author").value
  }, ${document.querySelector("#form-pages").value}`;
  let cardButton = document.createElement("button");
  cardButton.textContent = "Delete";
  cardButton.addEventListener(`click`, deleteBook);
  cardDiv.appendChild(cardButton);

  document.querySelector("#form-title").value = "";
  document.querySelector("#form-author").value = "";
  document.querySelector("#form-pages").value = "";
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
  this.info = function () {
    return `${this.title}by ${this.author} ,${this.pages}, ${this.read}`;
  };
}

const theHobbit = new Book(`The Hobbit`, `J.R.R Tolkien`, `295 pages`);
library.push(theHobbit);
const theHobbit2 = new Book(`asdasdasdasdasdsa`, `J.R.R Tolkien`, `295 pages`);
library.push(theHobbit2);
const theHobbit3 = new Book(`12312312312`, `J.R.R Tolkien`, `295 pages`);
library.push(theHobbit3);

function addBookToLibrary(book) {
  library.push(book);
}
function generateLibrary(library) {
  for (let i = 0; i < library.length; i++) {
    let cardDiv = document.createElement("div");
    cardDiv.classList.add("card-div");
    bookContainer.appendChild(cardDiv);
    let cardTitle = document.createElement("div");
    cardTitle.classList.add("card-title");
    cardDiv.appendChild(cardTitle);
    cardTitle.textContent = `${library[i].title}`;
    let cardP = document.createElement("p");
    cardDiv.appendChild(cardP);
    cardP.textContent = `${library[i].author} by ${library[i].title}, ${library[i].pages}, ${library[i].read}`;
    let cardButton = document.createElement("button");
    cardButton.textContent = "Delete";
    cardButton.addEventListener(`click`, deleteBook);
    cardDiv.appendChild(cardButton);
  }
}
generateLibrary(library);

function deleteBook() {
  this.parentElement.remove();
}
///// LOCAL STORAGE //////////////////////////////////
localStorage.setItem("library", JSON.stringify(library));

// const db = firebase.firestore();
// const x = document.getElementById("x");
// const y = document.getElementById("y");
// let yref;
// let unsubscribe;

// import { doc, updateDoc, arrayUnion, arrayRemove } from "firebase/firestore";

// // Add a new document in collection "cities"
// await setDoc(doc(db, "cities", "LA"), {
//   name: "Los Angeles",
//   state: "CA",
//   country: "USA",
// });

// const washingtonRef = doc(db, "cities", "DC");

// // Atomically add a new region to the "regions" array field.
// await updateDoc(washingtonRef, {
//   regions: arrayUnion("greater_virginia"),
// });

// // Atomically remove a region from the "regions" array field.
// await updateDoc(washingtonRef, {
//   regions: arrayRemove("east_coast"),
// });
