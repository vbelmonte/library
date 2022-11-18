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

/*function makeBookCardElement(bookEntry) {
    let testDiv = document.createElement("div");
    let testContent = document.createTextNode("test card");

    testDiv.appendChild(testContent);

}*/

/*function createBookCardCoverElement() {

}*/

function createBookCardDescriptionElement(book) {
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