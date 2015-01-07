module.exports = function(shelf) {
  if (this.onShelf === shelf.id) {
    console.log('It looks like that particular book is already on this shelf.\n');
  }
  else if (this.onShelf !== undefined) {
    console.log(['It looks like that particular book is already on shelf ', this.onShelf, '.'].join(''));
    console.log('It will need to be removed before you can put it on this shelf.\n');
  }
  else {
    shelf.books[this.id] = this;
    this.onShelf = shelf.id;
    console.log(['A copy of ', '\'', this.title, '\'', ' with an id of (', this.id, ') has been put on shelf ', shelf.id, '.\n'].join(''));
  }
};
