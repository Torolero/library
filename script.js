const myLibrary = [];

function Book(title, author, pages, read) {
  // the constructor...
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.bookId = crypto.randomUUID();
}

function addBookToLibrary(title, author, pages, read) {
  // take params, create a book then store it in the array
  myLibrary.push(new Book(title, author, pages, read));
}


//commenting out prompts to work on page more efficiently.

// let titlePrompt = prompt("Title:");
// let authorPrompt = prompt("Author:");
// let pagesPrompt = prompt("Pages:");
// let readPrompt = prompt("Read?");

addBookToLibrary("The Hunger Games", "Suzanne Collins", 384, true);
addBookToLibrary("Divergent", "Veronica Roth", 576, false);



const mainContainer = document.getElementById('main-container');

function addBooksToDom()
{

}



//Dialog code:
const dialog = document.querySelector("dialog");
const showButton = document.querySelector(".new-book");
const closeButton = document.querySelector("form button");

showButton.addEventListener("click", () => {
  dialog.showModal();
});

const form = document.querySelector('#myForm');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData(form);
    const values = Array.from(formData.values());

    addBookToLibrary(...values);

    dialog.close()
});

