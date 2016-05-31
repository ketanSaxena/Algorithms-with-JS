/*
 *Adds a method into array object that sorts the array via
 *selection sort in increasing order
 *Algorithm Complexity: O(n^2)
 *
 *@return sorted array
 *@author ketanSaxena
*/
Array.prototype.selectionSort = function() {
  var index, innerIndex, LENGTH = this.length;
  for (index = 0; index < LENGTH - 1; index++) {
    var minIndex = index;
    for (innerIndex = index + 1; innerIndex < LENGTH - index; innerIndex++) {
      if(this[innerIndex] < this[minIndex]) {
        minIndex = innerIndex;
      }
    }
    if (minIndex != index) {
      this._swap(minIndex, index);
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