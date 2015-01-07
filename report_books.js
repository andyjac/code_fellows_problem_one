module.exports = function() {
  var book
      , num = 1;

  if (Object.keys(this.books).length > 0) {
    console.log(['The following books are on shelf ', this.id, ':\n'].join(''));
    for (book in this.books) {
      console.log([num, '. ', '\'', this.books[book].title, '\'', ' by ', this.books[book].author].join(''));
      num += 1;
    }
  }
  else {
    console.log('There aren\'t any books on this shelf');
  }
  console.log('');
};
