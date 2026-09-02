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




let titlePrompt = prompt("Title:");
let authorPrompt = prompt("Author:");
let pagesPrompt = prompt("Pages:");
let readPrompt = prompt("Read?");

// addBookToLibrary(titlePrompt, authorPrompt, pagesPrompt, readPrompt);