let library = [];

const bookContainer = document.querySelector("#container");
const newBook = document.querySelector(`.new-book`);
const bookForm = document.querySelector(`.form`);
const submit = document.querySelector(`.submit`);
newBook.addEventListener(`click`, newBookForm);
submit.addEventListener(`click`, submitForm);

function submitForm() {
  let a = new Book(
    document.querySelector("#form-title").value,
    document.querySelector("#form-author").value,
    document.querySelector("#form-pages").value
  );
  library.push(a);
  localStorage.setItem(`library`, JSON.stringify(library));

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
function Book(title, author, pages) {
  this.title = title;
  this.author = author;
  this.pages = pages;
}

///// LOCAL STORAGE //////////////////////////////////

let l = JSON.parse(localStorage.getItem("library"));

function generateLibrary() {
  for (let i = 0; i < l.length; i++) {
    let cardDiv = document.createElement("div");
    cardDiv.classList.add("card-div");
    bookContainer.appendChild(cardDiv);
    let cardTitle = document.createElement("div");
    cardTitle.classList.add("card-title");
    cardDiv.appendChild(cardTitle);
    cardTitle.textContent = `${l[i].title}`;
    let cardP = document.createElement("p");
    cardDiv.appendChild(cardP);
    cardP.textContent = `${l[i].author} by ${l[i].title}, ${l[i].pages}, ${l[i].read}`;
    let cardButton = document.createElement("button");
    cardButton.textContent = "Delete";
    cardButton.addEventListener(`click`, deleteBook);
    cardDiv.appendChild(cardButton);
  }
}
generateLibrary();

function deleteBook() {
  let b = this.parentElement.firstChild.textContent;

  let index = l.findIndex((a) => a.title === b);
  l.splice(index, 1);
  localStorage.setItem("library", JSON.stringify(l));
  this.parentElement.remove();
}
