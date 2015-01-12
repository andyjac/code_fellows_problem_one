function BookListReporter() {}

BookListReporter.prototype.reportBooks = function(books) {
  if (books.length < 1) {
    console.log('There are no books to report.');
    return;
  }

  for (var i = 0; i < books.length; i++) {
    var book = books[i];
    console.log([(i + 1), '. ', '\'', book.title, '\'', ' by ', book.author].join(''));
  }

  console.log('');
};

module.exports = BookListReporter;
