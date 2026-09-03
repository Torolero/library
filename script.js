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

// addBookToLibrary("The Hunger Games", "Suzanne Collins", 384, true);
// addBookToLibrary("Divergent", "Veronica Roth", 576, false);



const mainContainer = document.getElementById('main-container');

let lastProcessedItems = 0;

function addBooksToDom()
{
    for (let i = lastProcessedItems; i < myLibrary.length; i++) {
        function iterateArray(book) {
            const bookDiv = document.createElement('div');
            const bookDetails = document.createElement('div');
            const readStatus = document.createElement('div');

            bookDiv.classList.add('book');
            bookDetails.classList.add('book-details');
            readStatus.classList.add('read-status');

            bookDetails.innerHTML = `<p class = 'book-title'>${book.title}</p> <p class = 'book-author'>Author: ${book.author}</p> <p class = 'book-pages'>${book.pages} Pages</p>`;

            if (book.read === true) {
                readStatus.innerHTML += `<p class = 'book-read'>Read</p>`;
            } else {
                readStatus.innerHTML += `<p class = 'book-not-read'>Not Read</p>`;
            }

            mainContainer.appendChild(bookDiv);
            bookDiv.appendChild(bookDetails);
            bookDiv.appendChild(readStatus);
        }
        iterateArray(myLibrary[i]);
    }
    lastProcessedItems = myLibrary.length;
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
    addBooksToDom();
    

    dialog.close()
});