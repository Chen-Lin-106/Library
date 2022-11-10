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
const read = document.querySelector(".form-read");

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
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
  const readShow = document.createElement("p");
  // const readImage = document.createElement("img");
  // readImage.src = "/images/check.png";
  const readBtn = document.createElement("button");
  readBtn.className = "btn-read";
  readBtn.textContent = "Change Read Or Not";

  const removeBtn = document.createElement("button");
  removeBtn.className = "btn-remove";
  removeBtn.textContent = "Remove";

  bookDetail.appendChild(title);
  bookDetail.appendChild(author);
  bookDetail.appendChild(pages);
  bookDetail.appendChild(readShow);
  bookDetail.appendChild(readBtn);
  // bookDetail.appendChild(readImage);
  bookDetail.appendChild(removeBtn);

  myLibrary.forEach(function (item, index) {
    bookCard.setAttribute("id", `card-${index + 1}`);
    title.textContent = `${item.title}`;
    author.textContent = `${item.author}`;
    pages.textContent = `${item.pages} + " pages"`;
    if (item.read == true) {
      readShow.textContent = "Read";
    } else if (item.read == false) {
      readShow.textContent = "Not Read";

      // readImage.style.display = "none";
    }
    readBtn.dataset.id = index + 1;
    removeBtn.dataset.id = index + 1;
  });

  readBtn.addEventListener("click", function changeReadStatus(e) {
    let indexRead = e.target.dataset.id - 1;
    let readStatus = myLibrary[indexRead].read;
    if (readStatus === true) {
      myLibrary[indexRead].read = false;
      readShow.textContent = "Not Read";
      console.log(myLibrary);
    } else if (readStatus === false) {
      myLibrary[indexRead].read = true;
      readShow.textContent = "Read";
      console.log(myLibrary);
    }
  });

  removeBtn.addEventListener("click", function removeFromLibrary(e) {
    let indexRemove = e.target.dataset.id - 1;
    myLibrary.splice(indexRemove, 1);
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
  const bookNew = new Book(
    titleForm.value,
    authorForm.value,
    pagesForm.value,
    read.checked
  );

  myLibrary.push(bookNew);
  displayBook();
  console.log(myLibrary);
}
