module.exports = function() {
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
