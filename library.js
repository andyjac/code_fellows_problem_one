var Shelf = require('./shelf_class');
var Book = require('./book_class');
var reportBooks = require('./report_books');
var enshelf = require('./enshelf');
var unshelf = require('./unshelf');

<<<<<<< HEAD
Shelf.prototype.reportBooks = reportBooks;
Shelf.prototype.removeBook = function(book) { delete this.books[book]; };
=======
function Library() {
  this.booksInLib = {};
  this.numberOfShelves = [];
}

function Shelf() {
  this.id = nextShelfId();

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

Shelf.prototype.reportBooks = reportBooks;

function Book(title, author) {
  this.id = nextBookId();
  this.title = title;
  this.author = author;

  Object.defineProperty(this, 'id', {
  writable: false
  });
}

var nextBookId = (function() {
  var nextId = 0;
  return function() {
    nextId += 1;
    return nextId;
  };
})();

Shelf.prototype.remove = function(item) {
  delete this[item];
};
>>>>>>> 1bb60a70b9cb2bb9fed44a871d082ce5c8b87965

Book.prototype.enshelf = enshelf;
Book.prototype.unshelf = unshelf;
