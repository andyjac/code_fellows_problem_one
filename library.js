var BookListReporter = require('./book_list_reporter');

function Library() {
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
  var numberOfShelves = 0;

  for (var shelf in this.shelves) {
    if (this.shelves.hasOwnProperty(shelf) && shelf !== undefined) {
      numberOfShelves++;
    }
  }

  if (numberOfShelves === 0) {
    console.log('There are no shelves in library ' + this.id + '.\n');
  } else if (numberOfShelves === 1) {
    console.log('There is 1 shelf in library ' + this.id + '.\n');
  } else {
    console.log('There are ' + numberOfShelves + ' shelves in library ' + this.id + '.\n');
  }

  return numberOfShelves;
};

Library.prototype.getBooks = function() {
  var books = [];

  for (var shelfId in this.shelves) {
    var shelf = this.shelves[shelfId];

    if (this.shelves.hasOwnProperty(shelfId) && shelf !== undefined) {
      books = books.concat(shelf.getBooks());
    }
  }

  return books;
};

Library.prototype.prettyPrintBooks = function() {
  var bookListReporter = new BookListReporter()
      , booksInLib = this.getBooks();

  if (booksInLib.length === 0) {
    console.log('There are no books to report in library ' + this.id + '.\n');
    return;
  } else {
    console.log('The following books are in library ' + this.id + ':\n');
    bookListReporter.reportBooks(booksInLib);
  }
};

Library.prototype.removeShelf = function(shelf) {
  console.log('Shelf ' + shelf.id + ' has been removed from library ' + this.id + '.\n');
  this.shelves[shelf.id] = undefined;
};

module.exports = Library;
