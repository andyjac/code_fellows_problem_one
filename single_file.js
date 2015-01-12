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
    return ++nextId;
  };
})();

Book.prototype.enshelf = function(shelf) {
  if (this.shelf === shelf) {
    console.log('It looks like that particular book is already on this shelf.\n');
  } else if (this.shelf !== undefined) {
    console.log('It looks like that particular book is already on shelf ' + this.shelf.id + '.');
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

function BookListReporter() {}

BookListReporter.prototype.reportBooks = function(books) {
  if (books.length < 1) {
    console.log('There are no books to report.\n');
    return;
  }
  for (var i = 0; i < books.length; i++) {
    var book = books[i];
    console.log([(i + 1), '. ', '\'', book.title, '\'', ' by ', book.author].join(''));
  }

  console.log('');
};
