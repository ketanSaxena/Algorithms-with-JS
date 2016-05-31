/*
 *Adds a method into array object that sorts the array via
 *bubble sort in increasing order
 *Algorithm Complexity: O(n^2)
 *
 *@return sorted array
 *@author ketanSaxena
*/
Array.prototype.bubbleSort = function() {
  var index, innerIndex, LENGTH = this.length;
  for (index = 0; index < LENGTH; index++) {
    for (innerIndex = 0; innerIndex < LENGTH - index; innerIndex++) {
      if(this[innerIndex] > this[innerIndex + 1]) {
        this._swap(innerIndex, innerIndex + 1);
      }
    }
  }

  return this;
}

/*
 *Adds a method into array object that sorts the array via
 *bubble sort in given order
 *Algorithm Complexity: O(n^2)
 *
 *@param order : order in which to sort ["ASC" | "DESC"]
 *@return sorted array
 *@author ketanSaxena
*/
Array.prototype.bubbleSortInOrder = function(String order) {
  var LENGTH = this.length, ASC = 'ASC', validClauseRegex = /ASC|DESC/;
  var index, innerIndex;

  if(!validClauseRegex.test(order)) {
    return 'Invalid order clause. Possible values ["ASC" | "DESC"]'
  }

  for (index = 0; index < LENGTH; index++) {
    for (innerIndex = 0; innerIndex < LENGTH - index; innerIndex++) {
      if(order === ASC ? this[innerIndex] > this[innerIndex + 1]
        : this[innerIndex] < this[innerIndex + 1]) {
        this._swap(innerIndex, innerIndex + 1);
      }
    }
  }

  return this;
}

Array.prototype._swap = function (x ,y) {
  var b = this[x];
  this[x] = this[y];
  this[y] = b;
  return this;
}

