let myLibrary = [];

function Book(title, author, pages, read){
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}

function addBookToLibrary(title, author, pages,read){
    addedBook = new Book(title, author, pages,read);
    myLibrary.push(addedBook);
}


function render(){

}

