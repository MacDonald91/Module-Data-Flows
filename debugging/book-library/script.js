let myLibrary = [];

window.addEventListener("load", function () {
  populateStorage();
  render();
});

function populateStorage() {
  if (myLibrary.length === 0) {
    let book1 = new Book("Robinson Crusoe", "Daniel Defoe", "252", true);
    let book2 = new Book(
      "The Old Man and the Sea",
      "Ernest Hemingway",
      "127",
      true
    );
    myLibrary.push(book1, book2);
  }
}

// FORM INPUTS
const title = document.getElementById("title");
const author = document.getElementById("author");
const pages = document.getElementById("pages");
const check = document.getElementById("check");

// ADD BOOK
function submit() {
  if (
    title.value === "" ||
    author.value === "" ||
    pages.value === ""
  ) {
    alert("Please fill all fields!");
    return;
  }

  let book = new Book(
    title.value,
    author.value,       // ✅ FIXED (was using title twice)
    pages.value,
    check.checked       // ✅ FIXED (correct checkbox value)
  );

  myLibrary.push(book); // ✅ FIXED (was "library")
  render();
}

// BOOK OBJECT
function Book(title, author, pages, check) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.check = check;
}

// RENDER TABLE
function render() {
  let table = document.getElementById("display");

  // CLEAR OLD ROWS
  let rowsNumber = table.rows.length;
  for (let n = rowsNumber - 1; n > 0; n--) { // ✅ FIXED SYNTAX
    table.deleteRow(n);
  }

  // ADD ROWS
  for (let i = 0; i < myLibrary.length; i++) {
    let row = table.insertRow(1);

    let titleCell = row.insertCell(0);
    let authorCell = row.insertCell(1);
    let pagesCell = row.insertCell(2);
    let wasReadCell = row.insertCell(3);
    let deleteCell = row.insertCell(4);

    titleCell.innerHTML = myLibrary[i].title;
    authorCell.innerHTML = myLibrary[i].author;
    pagesCell.innerHTML = myLibrary[i].pages;

    // READ BUTTON
    let changeBut = document.createElement("button");
    changeBut.className = "btn btn-success";

    let readStatus = myLibrary[i].check ? "Yes" : "No"; // ✅ FIXED
    changeBut.innerText = readStatus;

    changeBut.addEventListener("click", function () {
      myLibrary[i].check = !myLibrary[i].check;
      render();
    });

    wasReadCell.appendChild(changeBut);

    // DELETE BUTTON
    let delBut = document.createElement("button"); // ✅ FIXED NAME
    delBut.className = "btn btn-warning";
    delBut.innerHTML = "Delete";

    delBut.addEventListener("click", function () { // ✅ FIXED EVENT
      alert(`You've deleted: ${myLibrary[i].title}`);
      myLibrary.splice(i, 1);
      render();
    });

    deleteCell.appendChild(delBut);
  }
}