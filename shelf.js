var BookListReporter = require('./book_list_reporter');

function Shelf() {
  this.id = nextShelfId();
  this.books = {};

  Object.defineProperty(this, 'id', {
    writable: false
  });
}

var nextShelfId = (function() {
  var nextId = 0;
  return function() {
    return ++nextId;
  };
})();

Shelf.prototype.getBooks = function() {
  var books = [];

  for (var bookId in this.books) {
    var book = this.books[bookId];

    if(this.books.hasOwnProperty(bookId) && book !== undefined) {
      books.push(book);
    }
  }

  return books;
};

Shelf.prototype.prettyPrintBooks = function() {
  var bookListReporter = new BookListReporter()
      , booksOnShelf = this.getBooks();

  if (booksOnShelf.length === 0) {
    console.log('There are no books to report on shelf ' + this.id + '.\n');
    return;
  } else {
    console.log('The following books are on shelf ' + this.id + ':\n');
    bookListReporter.reportBooks(booksOnShelf);
  }
};

Shelf.prototype.removeBook = function(book) {
  delete this.books[book];
};

module.exports = Shelf;
