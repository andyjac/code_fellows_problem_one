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
    books.push(book);
  }

  return books;
};

Shelf.prototype.prettyPrintBooks = function() {
  var bookListReporter = new BookListReporter();

  console.log('The following books are on shelf ' + this.id + ':\n');
  bookListReporter.reportBooks(this.getBooks());
};

Shelf.prototype.removeBook = function(item) {
  delete this.books[item];
};

module.exports = Shelf;
