let cardContainer = document.querySelector(".card-container");
let readButton;

function addBookToLibrary(x) {
  myLibrary.push(x);
}

class Book {
  constructor(title, author, description, read) {
    this.title = title;
    this.author = author;
    this.description = description;
    this.read = read;
  }

  set readStatus(x) {
    this.read = x;
  }
}

let a = new Book("1984", "George Orwell", "Dystopian O.o", "read");
let myLibrary = [a];

// adds cards to display, need to redo this function, too complicated and unscalable.
// result is the Object, id is the number
let run = () =>
  myLibrary.forEach((result, idx) => {
    var myEle = document.getElementById(idx);
    // If a card with the current object doesnt exist, make it, else do nothing as to avoid duplicates.
    if (!myEle) {
      let content = `
        <div class="card" id="${idx}">
          <button class="delete-button" onclick="deleter(this)" id="${idx}"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x-circle"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg></button>
          <div class="card-title">${result.title}</div>
          <div class="card-author">${result.author}</div>
          <div class="description">${result.description}</div>
          <div class="read-status">
           <button class="read-button" id=${idx} onclick="changeReadStatus(this)">
             ${result.read}
          </button>
        </div>
      </div>
  `;

      cardContainer.innerHTML += content;
    }
  });

//redisplays all the mylibrary cards, need to redo this function and use DOM manipulation instead of literally adding HTML for security risks/cleaner code.
let run2 = () =>
  myLibrary.forEach((result, idx) => {
    let content = `
        <div class="card" id="${idx}">
          <button class="delete-button" onclick="deleter(this)" id="${idx}"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x-circle"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg></button>
          <div class="card-title">${result.title}</div>
          <div class="card-author">${result.author}</div>
          <div class="description">${result.description}</div>
          <div class="read-status">
           <button id="read-button" onclick="changeReadStatus(this)">
             ${result.read}
          </button>
        </div>
      </div>
  `;

    cardContainer.innerHTML += content;
  });

let reset = () => {
  cardContainer.innerHTML = "";
};

//buttons
const addBookBtn = document.getElementById("addBookBtn");
const submit = document.getElementById("submit");

//containers
const modal_container = document.getElementById("modal_container");
const body = document.querySelector(".main");

//form elements
const form = document.querySelector(".form");
const title_input = document.querySelector("#title");
const author_input = document.querySelector("#author");
const read_input = document.querySelector("#readStatus");
const description_input = document.querySelector("#description");

addBookBtn.addEventListener("click", () => {
  modal_container.classList.add("show");
  body.style.cssText = "filter: blur(3px);";
});

submit.addEventListener("click", (event) => {
  event.preventDefault();
  modal_container.classList.remove("show");
  body.style.cssText = "";
  let yeet = new Book(
    `${title_input.value}`,
    `${author_input.value}`,
    `${description_input.value}`,
    `${read_input.value}`
  );
  addBookToLibrary(yeet);
  run();
  form.reset();
});

window.addEventListener("load", (event) => {
  run();
});

let deleter = (element) => {
  reset();
  myLibrary.splice(element.id, 1);
  run2();
};

let changeReadStatus = (element) => {
  let r = myLibrary[element.id];
  r.title = "yeah";
  console.log(myLibrary[element.id]);
};
