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

myLibrary.forEach(book => {
    const bookDiv = document.createElement('div');
    bookDiv.classList.add('book');

    bookDiv.innerHTML = `<p class = 'book-title'>${book.title}</p> <p class = 'book-author'>Author: ${book.author}</p> <p class = 'book-pages'>${book.pages} Pages</p>`;

    if (book.read === true) {
        bookDiv.innerHTML += `<p class = 'book-read'>Read</p>`;
    } else {
        bookDiv.innerHTML += `<p class = 'book-not-read'>Not Read</p>`;
    }

    mainContainer.appendChild(bookDiv);
})
