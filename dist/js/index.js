let myLibrary = [];
const bookshelf = document.getElementById('bookshelf');

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
    clearShelf();
    myLibrary.forEach((book,index) => {
        bookCard = createBookCard(book, index);
        bookshelf.append(bookCard);
    });
}

function createBookCard(book, index){
    bookCard = document.createElement('div');
    bookCard.setAttribute('class','bookCover');
    bookCard.setAttribute('data-book-index', `${index}`)
    bookTitle = document.createElement('h2');
    bookTitle.innerHTML = book.title;
    bookAuthor = document.createElement('h3');
    bookAuthor.innerHTML = book.author;
    bookPageCount = document.createElement('h5');
    bookPageCount.innerHTML = book.pages + ' pages';
    iconBox = document.createElement('div');
    iconBox.setAttribute('class', 'readStatus')
    readIcon = document.createElement('i');
    readIcon.setAttribute('class','fas fa-check-circle');
    unreadIcon = document.createElement('i');
    unreadIcon.setAttribute('class','far fa-check-circle');
    if (book.read) {
        unreadIcon.classList.add('hidden');
    }
    else{
        readIcon.classList.add('hidden')
    }
    iconBox.append(readIcon,unreadIcon);
    bookCard.append(bookTitle,bookAuthor,bookPageCount,iconBox);
    return bookCard;
}

function clearShelf(){
    while(bookshelf.firstChild){
        bookshelf.removeChild(bookshelf.firstChild);
    }
}

//inital books

addBookToLibrary('A Tale of Two Cities', 'Charles Dickens', 341, false);
addBookToLibrary('Black Beauty', 'Anna Sewell', 255, true);
addBookToLibrary('Nineteen Eighty-Four', 'George Orwell', 328, false);

render();

