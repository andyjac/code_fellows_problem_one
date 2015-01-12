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
  }
  else if (this.shelf !== undefined) {
    console.log('It looks like that particular book is already on shelf ' + this.shelf.id + '.');
    console.log('It will need to be removed before you can put it on this shelf.\n');
  }
  else {
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
  }
  else {
    throw new Error('Tried to unshelve an unshelved book with id ' + this.id);
  }
};

module.exports = Book;
