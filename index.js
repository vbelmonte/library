let myLibrary = [];

let title = document.getElementById("title");
let author = document.getElementById("author");
let publicationYear = document.getElementById("publication-year");
let pages = document.getElementById("number-of-pages");
let genre = document.getElementById("genre");
let readStatus = document.getElementsByName("status");

function Book(title, author, publicationDate, pages, genre, readStatus) {
    // the constructor...
    this.title = title;
    this.author = author;
    this.publicationDate = publicationDate;
    this.pages = pages;
    this.genre = genre;
    this.readStatus = readStatus;
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




/**
 * Process and Submit Book functions
 */
function processBook() {
    let bookInfo = collectBookInfo();
    let bookCard = makeBookCard(bookInfo);
    
    addBookToLibrary(bookInfo);
    addCardToLibraryGrid(bookCard);
}

function preventDefaultButton() {
    let addBookButton = document.getElementById("add-book");
    addBookButton.addEventListener("click", function(event) {
        event.preventDefault();
    });
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

   let book = new Book(title, author, publicationYear, pages, genre, status);

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


/**
 * Book Card creator functions
 */

function makeBookCard(book) {
    let cardElement = document.createElement("div");
    let coverElement = createBookCoverElement();
    let descriptionElement = createBookDescriptionElement(book);

    cardElement.classList.add("book-card");
    cardElement.classList.add("card");
    cardElement.appendChild(coverElement);
    cardElement.appendChild(descriptionElement);

    return cardElement;
}

function createBookCoverElement() {
    let div = document.createElement("div");
    div.classList.add("cover");

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
}


preventDefaultButton();