var Shelf = require('./shelf_class');
var Book = require('./book_class');
var reportBooks = require('./report_books');
var enshelf = require('./enshelf');
var unshelf = require('./unshelf');

Shelf.prototype.reportBooks = reportBooks;
Shelf.prototype.removeBook = function(item) { delete this.books[item]; };

Book.prototype.enshelf = enshelf;
Book.prototype.unshelf = unshelf;
