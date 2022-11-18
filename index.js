let myLibrary = [];

function Book(title, author, publicationDate, pages, genre) {
    // the constructor...
    this.title = title;
    this.author = author;
    this.publicationDate = publicationDate;
    this.pages = pages;
    this.genre = genre;
}

function addBookToLibrary(book) {
    // do stuff here
    myLibrary.push(book);

}

/*function removeNoBooksWindow() {
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

function makeBookCardElement(bookEntry) {
    let testDiv = document.createElement("div");
    let testContent = document.createTextNode("test card");

    testDiv.appendChild(testContent);

}

function addCardToLibraryGrid(card) {
    document.getElementsByClassName("grid-container")[0].appendChild(card);
}

function createBookCardCoverElement() {

}

function createBookCardDescriptionElement() {

}

function createBookCardAuthorElement(authorName) {
    let paragraph = document.createElement("p");
    let name = document.createTextNode(authorName);

    paragraph.appendChild(name);
    paragraph.classList.add("author");

    return paragraph;
}

function createBookCardTitleElement(bookTitle) {
    let paragraph = document.createElement("p");
    let title = document.createTextNode(bookTitle);

    paragraph.appendChild(title);
    paragraph.classList.add("title");

    return paragraph;
}

function createBookCardPublishDateElement(publishDate) {
    let paragraph = document.createElement("p");
    let date = document.createTextNode(publishDate);

    paragraph.appendChild(date);
    paragraph.classList.add("publication-date");

    return paragraph;
}*/