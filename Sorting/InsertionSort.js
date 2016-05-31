/*
 *Adds a method into array object that sorts the array via
 *insertion sort in increasing order
 *Algorithm Complexity: O(n^2)
 *
 *@param: array 
 *@return: sorted array
 *@author: ketanSaxena
*/
Array.prototype.insertionSort = function() {
  var index, innerIndex, LENGTH = this.length;
  for(index = 0; index < LENGTH; index++) {
    var position, valueToInsert = this[index];
    for (position = index; position > 0 && this[position -1] > valueToInsert; position--) {
      this[position] = this[position - 1];
    }

    if(position != index) {
      this[position] = valueToInsert;
    }
  }

  return this;
}