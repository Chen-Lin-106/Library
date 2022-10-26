let myLibrary = [
  {
    title: "How to Catch a Star",
    author: "Oliver Jeffers",
    pages: 32,
    read: "not read yet",
    image: "/images/star.jpeg",
  },
  {
    title: "The Cow Tripped Over the Moon",
    author: "Tony Wilson",
    pages: 32,
    read: "not read yet",
    image: "/images/cow.jpeg",
  },
];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

const bookCards = document.querySelectorAll(".card");

myLibrary.forEach(function (item, index) {
  console.log(item.title);
  const codeBlock = `<div id="card-${index + 1} "class="card">
                        <img src="${item.image}" alt="" />
                        <div class="book-detail">
                           <p>${item.title}</p>
                           <p>${item.author}</p>
                           <p>Pages - <span>${item.pages}</span></p>
                           <p>Read Status - <span>${item.read}</span></p>
                           <button>Remove</button>
                        </div>
                    </div>`;

  document.querySelector(".cards").innerHTML += codeBlock;
});
