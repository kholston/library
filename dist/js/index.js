let myLibrary = [];
const bookshelf = document.getElementById('bookshelf');
let bookForm = document.getElementById('form-bg');
let openBtn = document.getElementById('addButton')
let closeBtn = document.getElementsByClassName('close')[0];

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

//Form opening and closing
openBtn.onclick = function(){
    bookForm.style.display = 'block';
}

closeBtn.onclick = function(){
    bookForm.style.display = 'none';
}

window.onclick = function(event){
    if(event.target == bookForm){
        bookForm.style.display = 'none';
    }
}

// Form processing
function processInput(form){
    let bookTitle = form.title.value;
    let bookAuthor = form.author.value;
    let numOfPages = form.pageCount.value;
    let readStatus = form.readCheck.value;
    addBookToLibrary(bookTitle,bookAuthor,numOfPages,readStatus);
    render();
}

//inital books

addBookToLibrary('A Tale of Two Cities', 'Charles Dickens', 341, false);
addBookToLibrary('Black Beauty', 'Anna Sewell', 255, true);
addBookToLibrary('Nineteen Eighty-Four', 'George Orwell', 328, false);

render();

