let myLibrary = [];

const books = document.querySelector(".cards");
const addNew = document.querySelector("#btn-new");
const addBook = document.querySelector("#btn-add");
const newBook = document.querySelector("form");
const formTitle = document.querySelector("#title");
const formAuthor = document.querySelector("#author");
const formPages = document.querySelector("#pages");
const isRead = document.querySelector("#isRead");
const titleForm = document.querySelector("#form-title");
const authorForm = document.querySelector("#form-author");
const pagesForm = document.querySelector("#form-pages");

function Book(title, author, pages) {
  this.title = title;
  this.author = author;
  this.pages = pages;
}

function displayBook() {
  const bookCard = document.createElement("div");
  bookCard.className = "card";

  books.appendChild(bookCard);

  const bookImage = document.createElement("img");
  bookImage.src = "/images/book.jpeg";

  const bookDetail = document.createElement("div");

  bookCard.appendChild(bookImage);
  bookCard.appendChild(bookDetail);

  const title = document.createElement("p");
  const author = document.createElement("p");
  const pages = document.createElement("p");
  const removeBtn = document.createElement("button");
  removeBtn.className = "btn-remove";
  removeBtn.textContent = "Remove";

  bookDetail.appendChild(title);
  bookDetail.appendChild(author);
  bookDetail.appendChild(pages);
  bookDetail.appendChild(removeBtn);

  myLibrary.forEach(function (item, index) {
    bookCard.setAttribute("id", `card-${index + 1}`);
    title.textContent = `${item.title}`;
    author.textContent = `${item.author}`;
    pages.textContent = `${item.pages} + " pages"`;
    removeBtn.dataset.id = index + 1;
  });

  removeBtn.addEventListener("click", function removeFromLibrary(e) {
    let indexRemove = e.target.dataset.id - 1;
    myLibrary.splice(indexRemove, 1);
    console.log(bookDetail.parentElement);
    bookDetail.parentElement.remove();
    console.log(myLibrary);
  });
}

addNew.addEventListener("click", function (e) {
  newBook.style.display = "block";
});

addBook.addEventListener("click", function (e) {
  e.preventDefault();
  addBookToLibrary();
  newBook.style.display = "none";
});

function addBookToLibrary() {
  const bookNew = new Book(titleForm.value, authorForm.value, pagesForm.value);
  myLibrary.push(bookNew);
  displayBook();
}
