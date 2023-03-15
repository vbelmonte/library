let myLibrary = [];

let title = document.getElementById("title");
let author = document.getElementById("author");
let publicationYear = document.getElementById("publication-year");
let pages = document.getElementById("number-of-pages");
let genre = document.getElementById("genre");
let readStatus = document.getElementsByName("status");
let bookcoverImage = document.getElementById("bookcover-img");
let bookcover = document.getElementById("bookcover");

let totalBooks = 0;
let booksRead = 0;
let booksInProgress = 0;
let pagesRead = 0;

/*function Book(title, author, publicationDate, pages, genre, readStatus, bookcover) {
    // the constructor...
    this.title = title;
    this.author = author;
    this.publicationDate = publicationDate;
    this.pages = pages;
    this.genre = genre;
    this.readStatus = readStatus;
    this.bookcover = bookcover;
}*/

class Book {
    constructor(title, author, publicationDate, pages, genre, readStatus, bookcover) {
        this.title = title;
        this.author = author;
        this.publicationDate = publicationDate;
        this.pages = pages;
        this.genre = genre;
        this.readStatus = readStatus;
        this.bookcover = bookcover;
    }
}

function addBookToLibrary(book) {
    // do stuff here
    myLibrary.push(book);
}

function removeNoBooksWindow() {
    //if myLibrary is non-empty, remove "No Books" window
    if ( !(myLibrary.length === 0) ) {
        console.log("non-empty array");

        document.getElementsByClassName("no-books")[0].style.opacity = "0";
    }
    //else, throw an error
    else {
        throw "myLibrary[] is empty!";
    }
}

function addCardToLibraryGrid(card) {
    document.getElementsByClassName("grid-container")[0].appendChild(card);
}

function checkEmptyInput() {
    let inputs = document.getElementsByClassName("input");
    let result = true;
    let result1 = true;
    let result2 = true;
    let i = 0;

    while (i < inputs.length) {
        console.log("i: " + i);

        if (inputs[i].type !== "radio") {
            if (inputs[i].value === "") {
                result1 = false;
                break;
            }
        }
        else {
            if (inputs[i].checked === true) {
                result2 = true;
                break;
            }
            else {
                result2 = false;
            }
        }
        i++;
    }

    if (result1 === true && result2 === true) {
        result = true;
    }
    else {
        result = false;
    }
    
    return result;
}




/**
 * Process, Submit, and Clear Book functions
 */
function processBook(event) {
    let bookInfo = collectBookInfo();
    let bookCard = makeBookCard(bookInfo);
    
    if (checkEmptyInput() === true) {
        console.log("inputs are non-empty");
        /*preventDefaultButton();*/
        preventDefaultButton(event);
        addBookToLibrary(bookInfo);
        addCardToLibraryGrid(bookCard);

        updateStats(bookInfo);

        disableClearMsg();
        disableErrorMsg();
        enableSuccessMsg();
        clearInputForms();
    }
    else {
        disableClearMsg();
        enableErrorMsg();
    }
}

function clearInputs(event) {
    preventDefaultButton(event);
    disableSuccessMsg();
    disableErrorMsg();
    enableClearMsg();
    title.value = "";
    author.value = "";
    publicationYear.value = "";
    pages.value = "";
    genre.value = "";
    bookcover.value = "";
    bookcoverImage.src = "";
    bookcoverImage.style.display = "none";
    uncheckRadioButtons();
}

function clearInputForms() {
    title.value = "";
    author.value = "";
    publicationYear.value = "";
    pages.value = "";
    genre.value = "";
    bookcover.value = "";
    bookcoverImage.src = "";
    bookcoverImage.style.display = "none";
    uncheckRadioButtons();
}

function uncheckRadioButtons() {
    for (i = 0; i < readStatus.length; i++) {
        readStatus[i].checked = false;
    }
}

/*function preventDefaultButton() {
    let addBookButton = document.getElementById("add-book");
    addBookButton.addEventListener("click", function(event) {
        event.preventDefault();
    });
}*/

function preventDefaultButton(event) {
    event.preventDefault();
}

function enableSuccessMsg() {
    document.getElementsByClassName("success-message")[0].style.visibility = "visible";
    document.getElementsByClassName("success-message")[0].style.display = "flex";
}

function disableSuccessMsg() {
    document.getElementsByClassName("success-message")[0].style.visibility = "hidden";
    document.getElementsByClassName("success-message")[0].style.display = "none";
}

function enableClearMsg() {
    document.getElementsByClassName("clear-message")[0].style.visibility = "visible";
    document.getElementsByClassName("clear-message")[0].style.display = "flex";
}

function disableClearMsg() {
    document.getElementsByClassName("clear-message")[0].style.visibility = "hidden";
    document.getElementsByClassName("clear-message")[0].style.display = "none";
}

function enableErrorMsg() {
    document.getElementsByClassName("error-message")[0].style.visibility = "visible";
    document.getElementsByClassName("error-message")[0].style.display = "flex";
}

function disableErrorMsg() {
    document.getElementsByClassName("error-message")[0].style.visibility = "hidden";
    document.getElementsByClassName("error-message")[0].style.display = "none";
}




/**
 * Book Information Collector functions
 */

function collectBookInfo() {
   let title = getTitle();
   let author = getAuthor()
   let publicationYear = getPublicationYear();
   let pages = getPages();
   let genre = getGenre();
   let status = getStatus();
   let bookcover = getBookCover();

   let book = new Book(title, author, publicationYear, pages, genre, status, bookcover);

   return book;
}

function getTitle() {
    return title.value;
}

function getAuthor() {
    return author.value;
}

function getPublicationYear() {
    return publicationYear.value;
}

function getPages() {
    return pages.value
}

function getGenre() {
    return genre.value;
}

function getBookCover() {
    return bookcoverImage.src;
}

function getStatus() {
    let statusResult = null;

    for (i = 0; i < readStatus.length; i++) {
        if (readStatus[i].checked) {
            statusResult = readStatus[i].value;
            break;
        }
    }
    
    return statusResult;
}


function showPreview(event) {
    if (event.target.files.length > 0) {
      var src = URL.createObjectURL(event.target.files[0]);
      var preview = document.getElementById("bookcover-img");
      preview.src = src;
      preview.style.display = "block";
    }
}


/**
 * Book Card creator functions
 */

function makeBookCard(book) {
    let cardElement = document.createElement("div");
    let coverElement = createBookCoverElement(book);
    let descriptionElement = createBookDescriptionElement(book);

    cardElement.classList.add("book-card");
    cardElement.classList.add("card");
    cardElement.appendChild(coverElement);
    cardElement.appendChild(descriptionElement);

    return cardElement;
}

function createBookCoverElement(book) {
    let div = document.createElement("div");
    div.classList.add("cover");
    div.style.background = "url('" + book.bookcover + "')";
    div.style.backgroundPosition = "top";
    div.style.backgroundSize = "cover";

    return div;
}

function createBookDescriptionElement(book) {
    let descriptionElement = document.createElement("div");
    let titleAuthorDateElement = createTitleAuthorDateElement(book);
    let pagesGenreElement = createPagesGenreElement(book);

    descriptionElement.classList.add("description");
    descriptionElement.appendChild(titleAuthorDateElement);
    descriptionElement.appendChild(pagesGenreElement);

    return descriptionElement;
}

function createAuthorElement(authorName) {
    let paragraph = document.createElement("p");
    let name = document.createTextNode(authorName);

    paragraph.appendChild(name);
    paragraph.classList.add("author");

    return paragraph;
}

function createTitleElement(bookTitle) {
    let paragraph = document.createElement("p");
    let title = document.createTextNode(bookTitle);

    paragraph.appendChild(title);
    paragraph.classList.add("title");

    return paragraph;
}

function createPublishDateElement(publishDate) {
    let paragraph = document.createElement("p");
    let date = document.createTextNode(publishDate);

    paragraph.appendChild(date);
    paragraph.classList.add("publication-date");

    return paragraph;
}

function createTitleAuthorDateElement(book) {
    let div = document.createElement("div");
    let authorElement = createAuthorElement(book.author);
    let titleElement = createTitleElement(book.title);
    let publishDateElement = createPublishDateElement(book.publicationDate);

    div.classList.add("title-author-date");
    div.appendChild(titleElement);
    div.appendChild(authorElement);
    div.appendChild(publishDateElement);

    return div;
}

function createPagesGenreElement(book) {
    let div = document.createElement("div");
    let pagesElement = createPagesElement(book.pages);
    let genreElement = createGenreElement(book.genre);

    div.classList.add("pages-genre");
    div.appendChild(pagesElement);
    div.appendChild(genreElement);

    return div;
}

function createPagesElement(pages) {
    let div = document.createElement("div");
    let paragraph = document.createElement("p");
    let span = document.createElement("span");
    let numberOfPages = document.createTextNode(pages);
    let text = document.createTextNode(" pages");

    span.appendChild(numberOfPages);
    span.classList.add("pages");
    paragraph.appendChild(span);
    paragraph.appendChild(text);
    div.appendChild(paragraph);

    return div;
}

function createGenreElement(genreName) {
    let div = document.createElement("div");
    let paragraph = document.createElement("p");
    let genre = document.createTextNode(genreName);

    paragraph.appendChild(genre);
    paragraph.classList.add("genre");
    div.appendChild(paragraph);

    return div;
}



/**
 * Add Book Button
 */

function openAddModal() {
    let addBookModal = document.getElementById("myModal");
    addBookModal.style.display = "flex";
}


/**
 * Add Book Modal Window Functions
 */

function closeModal() {
    let addBookModal = document.getElementById("myModal");
    addBookModal.style.display = "none";
    disableSuccessMsg();
    disableClearMsg();
    clearInputForms();
}




/**
 * Statistics functions
 */

function getTotalBooks() {
    let totalBooks = myLibrary.length;
    document.getElementById("your-books").innerHTML = totalBooks;
}

function getTotalPagesRead() {
    let totalPages = 0;

    for(i = 0; i < myLibrary.length; i++) {
        if (myLibrary[i].readStatus === "read")
        totalPages = totalPages + parseInt(myLibrary[i].pages);
    }

    document.getElementById("pages-read").innerHTML = totalPages;
}

function getBooksRead() {
    let booksRead = 0;

    for(i = 0; i < myLibrary.length; i++) {
        if (myLibrary[i].readStatus === "read") {
            booksRead++;
        }
    }

    document.getElementById("books-read").innerHTML = booksRead;
}

function getBooksInProgress() {
    let inProgress = 0;

    for(i = 0; i < myLibrary.length; i++) {
        if (myLibrary[i].readStatus === "in-progress") {
            inProgress++;
        }
    }
    document.getElementById("in-progress").innerHTML = inProgress;
}

function incrementTotalBooks() {
    totalBooks++;
    document.getElementById("your-books").innerHTML = totalBooks;
}

function incrementBooksRead(book) {
    if (book.readStatus === "read") {
        booksRead++;
        document.getElementById("books-read").innerHTML = booksRead;
    }
}

function incrementBooksInProgress(book) {
    if (book.readStatus === "in-progress") {
        booksInProgress++;
        document.getElementById("in-progress").innerHTML = booksInProgress;
    }
}

function incrementPagesRead(book) {
    if (book.readStatus === "read") {
        pagesRead = pagesRead + parseInt(book.pages);
        document.getElementById("pages-read").innerHTML = pagesRead;
    }
}

function updateStats(book) {
    incrementTotalBooks();
    incrementBooksRead(book);
    incrementBooksInProgress(book);
    incrementPagesRead(book);
}


getTotalBooks();
getTotalPagesRead();
getBooksRead();
getBooksInProgress();