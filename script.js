const dialog = document.querySelector("dialog")
const showButton = document.querySelector("header button");
const addButton = document.querySelector("dialog button");
const myLibrary = [];
const inputs = document.querySelectorAll("input");
const main = document.querySelector("main")

showButton.addEventListener("click", () => {
    dialog.showModal();
  });
  addButton.addEventListener("click", () => {
    addBookToLibrary(inputs)
    console.log(myLibrary)
    dialog.close();
    showBooks()
  });

function Book(title,author,pages,isRead) {
    this.id = myLibrary.length
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead; 
}

function addBookToLibrary(inputs) {
  const valies = []
  inputs.forEach((input)=>{
    valies.push(input.value);
    input.value = ""
})
  myLibrary.push(new Book(...valies))
}
function showBooks(){
    myLibrary.forEach(book=>{
        const bookCard = `
        <div class="card" id="id${book.id}">
        <h2 class="name">${book.title}</h2>
        <p class="author">By: ${book.author}</p>
            <p class="pages">${book.pages} pages</p>
            <label>
                <input type="checkbox" ${book.pages=="on"?checked:""}>
                Read/Unread
            </label>
        </div>
        `
        main.innerHTML +=bookCard;
        const card = document.querySelector(`#id${book.id}`);
        const removeButton = document.createElement("button")
        removeButton.innerText = "Remove"
        removeButton.addEventListener("click",()=>{
            card.parentElement.removeChild(card)
        })
        card.appendChild(removeButton)
    })
}
showBooks()