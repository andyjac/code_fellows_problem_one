function Shelf() {
  this.id = nextShelfId();
  this.books = {};

  Object.defineProperty(this, 'id', {
    writable: false
  });
};

var nextShelfId = (function() {
  var nextId = 0;
  return function() {
    nextId += 1;
    return nextId;
  };
})();

Shelf.prototype.reportBooks = function() {
  var book
      , num = 1;

  if (Object.keys(this.books).length > 0) {
    console.log('The following books are on shelf ' + this.id + ':\n');
    for (book in this.books) {
      console.log([num, '. ', '\'', this.books[book].title, '\'', ' by ', this.books[book].author].join(''));
      num += 1;
    }
  }
  else {
    console.log('Shelf ' + this.id + ' is empty.');
  }
  console.log('');
};

Shelf.prototype.removeBook = function(item) {
  delete this.books[item];
};

module.exports = Shelf;
