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
  var numberOfShelves = Object.keys(this.shelves).length
      , incrementor = 0;

  for (var i = 0; i <= numberOfShelves; i++) {
    if (this.shelves[i] !== undefined) incrementor++;
  }
  if (incrementor === 0) {
    console.log('There are no shelves in library ' + this.id + '.\n');
  } else if (incrementor === 1) {
    console.log('There is 1 shelf in library ' + this.id + '.\n');
  } else {
    console.log('There are ' + incrementor + ' shelves in library ' + this.id + '.\n');
  }

  return incrementor;
};

Library.prototype.getBooks = function() {
  var books = [];

  for (var shelfId in this.shelves) {
    var shelf = this.shelves[shelfId];
    if (shelf !== undefined) books = books.concat(shelf.getBooks());
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
