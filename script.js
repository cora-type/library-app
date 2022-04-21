let cardContainer = document.querySelector(".card-container");
let myLibrary = [];

function addBookToLibrary(x) {
  myLibrary.push(x);
}

function Book(title, author, description, read) {
  this.title = title;
  this.author = author;
  this.description = description;
  this.read = read;
  // this.info = function () {
  //   return title + " by " + author + ", " + pages + " pages," + read;
  // };
}

// insertObject is the Object, id is the number
myLibrary.forEach((result) => {
  run(result);
});

let run = (insertObject) => {
  let content = `
  <div class="card">
    <div class="card-title">${insertObject.title}</div>
    <div class="card-author">${insertObject.author}</div>
              <div class="description">${insertObject.description}</div>
    <div class="read-status">
      <button id="read-button">
        ${insertObject.read}<svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="feather feather-check-circle"
            >
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
              <polyline points="22 4 12 14.01 9 11.01"></polyline>
            </svg>
          </button>
        </div>
        </div>
  `;

  cardContainer.innerHTML += content;
};

//buttons
const addBookBtn = document.getElementById("addBookBtn");
const submit = document.getElementById("submit");
const deleteButton = document.getElementById("delete");

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

deleteButton.addEventListener("click", () => {});

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
  run(yeet);
  console.log(myLibrary);

  form.reset();
});
