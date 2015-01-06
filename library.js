function Shelf(number) {
  this.number = number;
  this.booksOnShelf = {};
}

function Book(title, author) {
  this.title = title;
  this.author = author;
}

Shelf.prototype.reportBooks = function() {
  var book
      , num = 1;

  if (Object.keys(this.booksOnShelf).length > 0) {
    console.log(['The following books are on shelf ', this.number, ':', '\n'].join(''));
    for (book in this.booksOnShelf) {
      console.log([num, '. ', book, ' (', this.booksOnShelf[book].numberOfCopies, ').'].join(''));
      num++;
    }
  }
  else {
    console.log(['There are no books on shelf ', this.number, '.'].join(''));
  }
  console.log('');
};

Book.prototype.enshelf = function(shelf) {
  var bookOnShelf = shelf.booksOnShelf;

  if (bookOnShelf[this.title] !== undefined) {
    bookOnShelf[this.title].numberOfCopies += 1;
    console.log(['Another copy of ', '\'', this.title, '\'', ' has been put on shelf ', shelf.number, '.'].join(''));
    console.log(['There are now ', bookOnShelf[this.title].numberOfCopies, ' copies on this shelf.', '\n'].join(''));
  }
  else {
    bookOnShelf[this.title] = { numberOfCopies: 1 };
    console.log(['\'', this.title, '\'', ' has been put on shelf ', shelf.number, '.', '\n'].join(''));
  }
};

Book.prototype.unshelf = function(shelf) {
  var bookOnShelf = shelf.booksOnShelf;

  if (bookOnShelf[this.title].numberOfCopies > 2) {
    bookOnShelf[this.title].numberOfCopies -= 1;
    console.log(['A copy of ', '\'', this.title, '\'', ' has been removed from shelf ', shelf.number, '.'].join(''));
    console.log(['There are now ', bookOnShelf[this.title].numberOfCopies, ' copies on this shelf.', '\n'].join(''));
  }
  else if (bookOnShelf[this.title].numberOfCopies === 2) {
    bookOnShelf[this.title].numberOfCopies -= 1;
    console.log(['A copy of ', '\'', this.title, '\'', ' has been removed from shelf ', shelf.number, '.'].join(''));
    console.log(['There is now 1 copy on this shelf.', '\n'].join(''));
  }
  else {
    delete bookOnShelf[this.title];
    console.log(['The last copy of ', '\'', this.title, '\'', ' has been removed from shelf ', shelf.number, '.', '\n'].join(''));
  }
};
