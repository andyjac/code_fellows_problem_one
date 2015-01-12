var BookListReporter = require('./book_list_reporter');

function Library(shelves) {
  this.id = nextLibraryId();
  this.shelves = {};
}

var nextLibraryId = (function() {
  var nextId = 0;
  return function() {
    nextId += 1;
    return nextId;
  };
})();

Library.prototype.addShelf = function(shelf) {
  console.log('Shelf ' + shelf.id + ' is now in library ' + this.id + '.\n');
  this.shelves[shelf.id] = shelf;
};

Library.prototype.shelfCount = function() {
  var numberOfShelves = Object.keys(this.shelves).length;
  console.log('There are ' + numberOfShelves + ' shelves in library ' + this.id + '.\n');

  return numberOfShelves;
};

Library.prototype.getBooks = function() {
  var books = [];

  for (var shelfId in this.shelves) {
    var shelf = this.shelves[shelfId];
    books = books.concat(shelf.getBooks());
  }

  return books;
};

Library.prototype.prettyPrintBooks = function() {
  var bookListReporter = new BookListReporter();

  console.log('The following books are in library ' + this.id + ':\n');
  bookListReporter.reportBooks(this.getBooks());
};

Library.prototype.removeShelf = function(shelf) {
  console.log('Shelf ' + shelf.id + ' has been removed from library ' + this.id + '.\n');
  this.shelves[shelf.id] = undefined;
};

module.exports = Library;
