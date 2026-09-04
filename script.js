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


const mainContainer = document.getElementById('main-container');

let lastProcessedItems = 0;

function addBooksToDom()
{
    for (let i = lastProcessedItems; i < myLibrary.length; i++) {
        function iterateArray(book) {
            const bookDiv = document.createElement('div');
            const bookDetails = document.createElement('div');
            const readStatus = document.createElement('button');
            const buttonDiv = document.createElement('div');
            const bookButton = document.createElement('button');

            bookDiv.classList.add('book');
            bookDetails.classList.add('book-details');
            readStatus.classList.add('read-status');
            buttonDiv.classList.add('remove-button-div');
            bookButton.classList.add('remove-button');

            bookDetails.innerHTML = `<p class = 'book-title'>${book.title}</p> <p class = 'book-author'>Author: ${book.author}</p> <p class = 'book-pages'>${book.pages} Pages</p>`;

            bookButton.textContent = `Remove`;

            if (book.read == 'true') {
                readStatus.textContent += `Read`;
                readStatus.classList.add('book-read');
            } else {
                readStatus.textContent += `Not Read`;
                readStatus.classList.add('book-not-read');
            }

            mainContainer.appendChild(bookDiv);
            bookDiv.appendChild(bookDetails);
            bookDiv.appendChild(readStatus);
            bookDiv.appendChild(buttonDiv);
            buttonDiv.appendChild(bookButton);

            bookDiv.dataset.bookId = `${book.bookId}`;
            bookButton.dataset.bookId = `${book.bookId}`;

            
        }
        iterateArray(myLibrary[i]);
        
    }
    lastProcessedItems = myLibrary.length;

    const testButtons = document.querySelectorAll(".remove-button")
    const allBooks = document.querySelectorAll('.book');
    const parent = document.getElementById("main-container");

    testButtons.forEach((btn) => {
        btn.addEventListener('click', () => {
            allBooks.forEach((book) => {
                if(btn.dataset.bookId === book.dataset.bookId) {
                parent.removeChild(book);
                }
            })
        });
    });
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




addBookToLibrary("The Hunger Games", "Suzanne Collins", 384, "true");
addBookToLibrary("Divergent", "Veronica Roth", 576, "false");
addBookToLibrary("The Bible", "Various", 1200, "true");

addBooksToDom();













