const dialog = document.querySelector("dialog");
const showButton = document.querySelector("header button");
const addButton = document.querySelector("dialog button");
const myLibrary = [
  { id: 0, title: "Ghost Coming", author: "Anonym", pages: 233, isRead: "on" },
  { id: 1, title: "Miracle", author: "Anonym", pages: 933, isRead: "on" },
  { id: 2, title: "Departure", author: "Anonym", pages: 133, isRead: "off" },
  { id: 3, title: "Strangers", author: "Anonym", pages: 233, isRead: "off" },
  { id: 4, title: "The 100", author: "Anonym", pages: 633, isRead: "on" },
  {
    id: 5,
    title: "Room with Love",
    author: "Anonym",
    pages: 333,
    isRead: "off",
  },
  { id: 6, title: "Sky", author: "Anonym", pages: 356, isRead: "on" },
];
const inputs = document.querySelectorAll("input");
const main = document.querySelector("main");

showButton.addEventListener("click", () => {
  dialog.showModal();
});
addButton.addEventListener("click", () => {
  addBookToLibrary(inputs);
  console.log(myLibrary);
  dialog.close();
  showBooks();
});

function Book(title, author, pages, isRead) {
  this.id = myLibrary.length;
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead;
}

function addBookToLibrary(inputs) {
  const valies = [];
  inputs.forEach((input) => {
    valies.push(input.value);
    input.value = "";
  });
  myLibrary.push(new Book(...valies));
}

function showBooks() {
    removeAll()
  myLibrary.forEach((book) => {
    const div = document.createElement("div");
    div.classList.add("card");
    div.id = "book" + book.id;

    const h2 = document.createElement("h2");
    h2.innerText = book.title;

    const p = document.createElement("p");
    p.innerText = "By: " + book.author;

    const label = document.createElement("label");
    const checkBox = document.createElement("input");
    checkBox.type = "checkbox";
    checkBox.checked = book.isRead==="on"?true:false;
    label.innerText = "Read/Unread: ";
    label.appendChild(checkBox);
    div.append(
      h2,
      p,
      (p.cloneNode().innerText = book.pages + " pages"),
      label    );
    main.appendChild(div);
    div.appendChild(createRemoveButton(book.id))
  });
}

function removeAll(){
   const cards = document.querySelectorAll("main>.card");
   cards.forEach(card=>main.removeChild(card))
}

function createRemoveButton(id) {
  const removeButton = document.createElement("button");
  removeButton.innerText = "Remove";
  removeButton.addEventListener("click", () => {
    const card = document.querySelector(`#book${id}`);
    card.parentElement.removeChild(card);
    myLibrary.splice(id,1)
  });
  return removeButton;
}
showBooks();
