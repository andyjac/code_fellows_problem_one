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
    console.log('It looks like that particular book is already on this shelf.\n');
  }
  else if (this.onShelf !== undefined && this.onShelf !== shelf.id) {
    console.log(['It looks like that particular book is already on shelf ', this.onShelf, '.'].join(''));
    console.log('It will need to be removed before you can put it on this shelf.\n');
  }
  else {
    shelf.books[this.id] = { title: this.title, author: this.author };
    this.onShelf = shelf.id;
    console.log(['A copy of ', '\'', this.title, '\'', ' with an id of (', this.id, ') has been put on shelf ', shelf.id, '.\n'].join(''));
  }
};

Book.prototype.unshelf = function(shelf) {
  if (this.onShelf === shelf.id) {
    console.log(['A copy of ', '\'', this.title, '\'', ' with an id of (', this.id, ') has been removed from shelf ', shelf.id, '.\n'].join(''));
    delete this.onShelf;
    delete shelf.books[this.id];
  }
  else if (this.onShelf !== undefined && this.onShelf !== shelf.id) {
    console.log(['It looks like that particular book is actually on shelf ', this.onShelf, '.'].join(''));
    console.log('You will need to head over to that shelf if you want to remove it.\n');
  }
  else {
    console.log('It looks like that book isn\'t on any shelf.\nYou\'ll need to put it on a shelf first, if you want to remove it\n');
  }
};
