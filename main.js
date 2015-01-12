var Book = require('./book');
var Shelf = require('./shelf');

function Library() {
  this.id = nextLibraryId();
  this.booksInLib = {};
  this.shelvesInLib = [];
};

var nextLibraryId = (function() {
  var nextId = 0;
  return function() {
    nextId += 1;
    return nextId;
  };
})();

Library.prototype.numberOfShelves = function() {
  console.log('There are ' + this.shelvesInLib.length + ' shelves in library ' + this.id + '.\n');
};

Library.prototype.listOfBooks = function() {
  for (var shelf in this.booksInLib) {
    console.log(this.booksInLib[shelf]);
  }
};

var book1 = new Book('The Hobbit', 'J.R.R. Tolkien');

var shelf1 = new Shelf();

book1.enshelf(shelf1);

shelf1.reportBooks();

book1.unshelf();
