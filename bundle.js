(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
function Book(title, author) {
  this.id = nextBookId();
  this.title = title;
  this.author = author;

  Object.defineProperty(this, 'id', {
  writable: false,
  });
}

var nextBookId = (function() {
  var nextId = 0;
  return function() {
    nextId += 1;
    return nextId;
  };
})();

Book.prototype.enshelf = function(shelf) {
  if (this.shelf === shelf) {
    console.log('It looks like that particular book is already on this shelf.\n');
  } else if (this.shelf !== undefined) {
    console.log('It looks like that particular book is already on shelf ' + this.shelf.id + '.');
    console.log('It will need to be removed before you can put it on this shelf.\n');
  } else {
    this.shelf = shelf;
    shelf.books[this.id] = this;
    console.log(['A copy of ', '\'', this.title, '\'', ' with an id of (', this.id, ') has been put on shelf ', shelf.id, '.\n'].join(''));
  }
};

Book.prototype.unshelf = function() {
  if (this.shelf !== undefined) {
    console.log(['A copy of ', '\'', this.title, '\'', ' with an id of (', this.id, ') has been removed from shelf ', this.shelf.id, '.\n'].join(''));
    this.shelf.removeBook(this.id);
    this.shelf = undefined;
  } else {
    throw new Error('Tried to unshelve an unshelved book with id ' + this.id);
  }
};

module.exports = Book;

},{}],2:[function(require,module,exports){
function BookListReporter() {}

BookListReporter.prototype.reportBooks = function(books) {
  if (books.length < 1) {
    console.log('There are no books to report.');
    return;
  }

  var book;

  for (var i = 0; i < books.length; i++) {
    console.log([i, '. ', '\'', books[i].title, '\'', ' by ', books[i].author].join(''));
  }

  console.log('');
};

module.exports = BookListReporter;

},{}],3:[function(require,module,exports){
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

Library.prototype.prettyPrintBooks = function() {
  var bookListReporter = new BookListReporter();

  bookListReporter.reportBooks(this.getBooks());
};

Library.prototype.getBooks = function() {
  var books = [];

  for (var shelfId in this.shelves) {
    var shelf = this.shelves[shelfId];
    books = books.concat(shelf.getBooks());
  }

  return books;
};

Library.prototype.reportShelfCount = function() {
  var shelves = [];

  for (var shelfId in this.shelves) {
    var shelf = this.shelves[shelfId];
    shelves = shelves.concat(shelf);
  }
  console.log('There are ' + shelves.length + ' shelves in library ' + this.id + '.\n');
  return shelves.length;
};

Library.prototype.addShelf = function(shelf) {
  console.log('Shelf ' + shelf.id + ' is now in library ' + this.id + '.\n');
  this.shelves[shelf.id] = shelf;
};

Library.prototype.removeShelf = function(shelf) {
  console.log('Shelf ' + shelf.id + ' has been removed from library ' + this.id + '.\n');
  this.shelves[shelf.id] = undefined;
};

module.exports = Library;

},{"./book_list_reporter":2}],4:[function(require,module,exports){
var Book = require('./book');
var Shelf = require('./shelf');
var Library = require('./library');

// *****************************************************
// Playground code goes here!
// *****************************************************

},{"./book":1,"./library":3,"./shelf":5}],5:[function(require,module,exports){
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

},{}]},{},[4]);
