// set up library 
let myLibrary = [];
let bookIndex = 0;
let buttonCount = 0;

//set up object constructor
function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = false;
}


//add object to library
function addBookToLibrary(Book){
    myLibrary.push(Book);
    // track library index
    bookIndex = bookIndex + 1;
    let buttonName = "button" + bookIndex;

    let html =  `
      <entry id=${bookIndex}>
          <div>
          <h3>Title: ${Book.title}</h3>
          <h3>Author: ${Book.author}</h3>
          <h3>Pages: ${Book.pages}</h3>
          <input type="checkbox" id="readBox" name = "readBox" value="Read">
          <label for"readBox">Read</label><br>
          <button id=${buttonName}>Remove</button>
          </div>
      </entry>
      `;


    var newEl = document.createElement("template");
    newEl.innerHTML = html.trim();
    document.getElementById('main').appendChild(newEl.content.firstChild);


    //create remove button function
    document.getElementById(buttonName).onclick = function(ev) {

        let newErEl = ev.target.parentNode.parentNode;
        document.getElementById('main').removeChild(newErEl);

        console.log(myLibrary);
    }
}


//test books
let lotr = new Book('The Fellowship of the Ring', 'J.R.R. Tolkein', '423 pages');
let ender = new Book('Enders Game', 'Orson Scott Card', '324 pages');
let martian = new Book('The Martian', 'Anthony Weir', '369 pages');
addBookToLibrary(lotr);
addBookToLibrary(ender);
addBookToLibrary(martian);


//add book to library form button
const addBtn = document.getElementById("submit");
addBtn.onclick = function() {
    let a = document.getElementById("bookTitle").value
    let b = document.getElementById("bookAuthor").value
    let c = document.getElementById("bookPages").value
    let newBook = new Book(a, b, c);    
    addBookToLibrary(newBook);

    document.getElementById("bookTitle").value = ""
    document.getElementById("bookAuthor").value = ""
    document.getElementById("bookPages").value = ""
}


function openForm() {
    document.getElementById("myForm").style.display = "block";
}


function submitForm(){
    let a = document.getElementById("bookTitle")
}


function closeForm() {
    document.getElementById("myForm").style.display = "none";
}


