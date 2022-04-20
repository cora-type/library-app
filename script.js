let cardContainer = document.querySelector(".card-container");

function addBookToLibrary(x) {
  myLibrary.push(x);
}

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  // this.info = function () {
  //   return title + " by " + author + ", " + pages + " pages," + read;
  // };
}

let example = new Book("Circe", "Madeline Miller", "393", "false");
let example2 = new Book("1984", "George Orwell", "455", "false");
let example3 = new Book("Yeet", "Madeline Miller", "393", "false");

let myLibrary = [example, example2, example3];
// result is the Object, id is the number

myLibrary.forEach((result) => {
  // create card element
  const theCard = document.createElement("div");
  theCard.classList.add("card");
  // Construct card content
  const content = `
  <div class="card">
    <div class="card-title">${result.title}</div>
    <div class="card-author">${result.author}</div>
    <div class="read-status">
      <button id="read-button">
        ${result.read}<svg
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

  // Append newyly created card element to the container
  cardContainer.innerHTML += content;
});
