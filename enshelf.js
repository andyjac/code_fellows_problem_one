module.exports = function(shelf) {
  if (this.shelf === shelf) {
    console.log('It looks like that particular book is already on this shelf.\n');
  }
  else if (this.shelf !== undefined) {
    console.log('It looks like that particular book is already on shelf ' + this.shelf.id + '.');
    console.log('It will need to be removed before you can put it on this shelf.\n');
  }
  else {
    this.shelf = shelf;
    shelf[this.id] = this;
    console.log(['A copy of ', '\'', this.title, '\'', ' with an id of (', this.id, ') has been put on shelf ', shelf.id, '.\n'].join(''));
  }
};
