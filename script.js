let card = document.querySelector("data-card");

let myLibrary = [];

function addBookToLibrary(book) {
  myLibrary.push(book);
}

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function () {
    return title + " by " + author + ", " + pages + " pages," + read;
  };
}

let example = new Book("Circe", "Madeline Miller", 393, false);

card.h3.innerText = "hello";

window.addEventListener("load", (event) => {
  console.log("page is fully loaded");
});
