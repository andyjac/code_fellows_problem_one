var reportBooks = require('./report_books');
var enshelf = require('./enshelf');
var unshelf = require('./unshelf');

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

Book.prototype.enshelf = enshelf;
Book.prototype.unshelf = unshelf;
