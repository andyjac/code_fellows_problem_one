function Shelf() {
  this.id = nextShelfId();
  this.books = {};
}

function Book(title, author) {
  this.id = nextBookId();
  this.title = title;
  this.author = author;
}

var nextBookId = (function() {
  var nextId = 0;
  return function() {
    nextId += 1;
    return nextId;
  };
})();

var nextShelfId = (function() {
  var nextId = 0;
  return function() {
    nextId += 1;
    return nextId;
  };
})();

Book.prototype.enshelf = function(shelf) {
  if (this.onShelf === shelf.id) {
    console.log('It looks like the book with that particular id is already on this shelf.\n');
  }
  else if (this.onShelf !== undefined && this.onShelf !== shelf.id) {
    console.log(['It looks like the book with that particular id is already on shelf ', this.onShelf, '.'].join(''));
    console.log('It will need to be removed before you can put it on this shelf.\n');
  }
  else {
    this.onShelf = shelf.id;
    shelf.books[this.id] = { title: this.title, author: this.author };
    console.log(['A copy of ', '\'', this.title, '\'', ' with an id of (', this.id, ') has been put on shelf ', shelf.id, '.\n'].join(''));
  }
};
