function BookListReporter() {}

BookListReporter.prototype.reportBooks = function(books) {
  if (books.length < 1) {
    console.log('There are no books to report.') && return;
  }

  var book;

  for (var i = 0; i < books.length; i++) {
    console.log([i, '. ', '\'', books[i].title, '\'', ' by ', books[i].author].join(''));
  }

  console.log('');
};

module.exports = BookListReporter;
