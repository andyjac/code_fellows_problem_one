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
    nextId += 1;
    return nextId;
  };
})();

Shelf.prototype.removeBook = function(item) {
  delete this.books[item];
};

Shelf.prototype.getBooks = function() {
  var books = [];

  for (var bookId in this.books) {
    var book = this.books[bookId];
    books.push(book);
  }

  return books;
};

module.exports = Shelf;
