function Book(title) {
  this.title = title;
}

Book.prototype.enshelf = function(shelf) {
  shelf.booksOnShelf[this.title] = 'On this shelf';
  console.log(this.title, 'is now sitting on shelf', shelf.number);
};

Book.prototype.unshelf = function(shelf) {
  delete shelf.booksOnShelf[this.title];
  console.log(this.title, 'has been removed from shelf', shelf.number);
};

function Shelf(number) {
  this.number = number;
  this.booksOnShelf = {};
}

var book1 = new Book('A Tale of Two Cities');
console.log(book1.title);

var shelf1 = new Shelf(1);
console.log(shelf1.number);
console.log(shelf1.booksOnShelf);

book1.enshelf(shelf1);
console.log(shelf1.booksOnShelf);

book1.unshelf(shelf1);
console.log(shelf1.booksOmShelf);
