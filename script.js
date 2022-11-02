let myLibrary = [];

const bookList = document.querySelector(".cards");
const bookCards = document.querySelector(".card");
const addNewBook = document.querySelector("#add-btn");
const newBook = document.querySelector(".newbook");
const add = document.querySelector("#btn-added");
const title = document.querySelector("#title");
const author = document.querySelector("#author");
const pages = document.querySelector("#pages");
const isRead = document.querySelector("#isRead");

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function displayBook() {
  let codeBlock;
  myLibrary.forEach(function (item, index) {
    console.log(item.title);
    codeBlock = `<div id="card-${index + 1} "class="card">
                          <img src="/images/book.jpeg" alt="" />
                          <div class="book-detail">
                             <p>${item.title}</p>
                             <p>${item.author}</p>
                             <p>Pages - <span>${item.pages}</span></p>
                             <p>Read Status - <span>${item.read}</span></p>
                             <button>Remove</button>
                          </div>
                      </div>`;
  });
  bookList.innerHTML += codeBlock;
}

addNewBook.addEventListener("click", function () {
  newBook.style.display = "block";
});

add.addEventListener("click", function (e) {
  e.preventDefault();
  addBookToLibrary();
  newBook.style.display = "none";
});

function addBookToLibrary() {
  const bookNew = new Book(
    title.value,
    author.value,
    pages.value,
    isRead.value
  );
  myLibrary.push(bookNew);
  console.log(myLibrary);
  displayBook();
}
