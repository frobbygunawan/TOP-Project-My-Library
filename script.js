let myLibrary = [];

function Book(title, author, page, read) {
  this.title = title
  this.author = author
  this.page = page
  this.read = true
  this.info = () => {
    return (`${this.title} by ${this.author}, ${this.page} pages, ${this.read === true ? "read" : "not read yet"}`)
  }
}

const add = new Book("The Hobbit", "J.R.R. Tolkien", "295", false);

function addBookToLibrary(new_book) {
  myLibrary.push(new_book);
}

addBookToLibrary(add);

function display() {
  let table = document.querySelector("tbody");
  while (table.hasChildNodes()) {
    table.removeChild(table.firstChild);
  }
myLibrary.forEach((each_book) => {
  let row = document.createElement("tr");
  row.setAttribute("data-index", `${myLibrary.indexOf(each_book)}`)
  row.innerHTML = `<td>${each_book.title}</td><td>${each_book.author}</td><td>${each_book.page}</td><i class="icon-remove"> Remove</i>`;
  table.appendChild(row);
});
}

display();

const addRemoveFunc = () => {
  document.querySelectorAll("i").forEach((each_button) => {
    each_button.addEventListener("click", (event) => {
      const index = parseInt(event.target.dataset.index);
      myLibrary.splice(index, 1);
      display();
    })
  })
};

addRemoveFunc();


document.querySelector("form").onsubmit= (event) => {
  event.preventDefault();
  const title = document.querySelector("#title").value;
  const author = document.querySelector("#author").value;
  const page = document.querySelector("#page").value;
  const read= document.querySelector("#read").checked;
  addBookToLibrary(new Book(title, author, page, read));
  display();
  addRemoveFunc();
};