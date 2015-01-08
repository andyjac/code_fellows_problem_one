module.exports = function() {
  if (this.shelf !== undefined) {
    console.log(['A copy of ', '\'', this.title, '\'', ' with an id of (', this.id, ') has been removed from shelf ', this.shelf.id, '.\n'].join(''));
    this.shelf.remove(this.id);
    this.shelf = undefined;
  }
  else {
    throw new Error('Tried to unshelve an unshelved book with id ' + this.id);
  }
};
