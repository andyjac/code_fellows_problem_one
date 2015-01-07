module.exports = function(shelf) {
  if (this.onShelf === shelf.id) {
    console.log(['A copy of ', '\'', this.title, '\'', ' with an id of (', this.id, ') has been removed from shelf ', shelf.id, '.\n'].join(''));
    this.onShelf = undefined;
    delete shelf.books[this.id];
  }
  else if (this.onShelf !== undefined) {
    console.log(['It looks like that particular book is actually on shelf ', this.onShelf, '.'].join(''));
    console.log('You will need to head over to that shelf if you want to remove it.\n');
  }
  else {
    console.log('It looks like that book isn\'t on any shelf.\nYou\'ll need to put it on a shelf first, before it can be removed.\n');
  }
};
