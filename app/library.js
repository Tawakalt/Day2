'use strict';

module.exports = {

 findMinMax: (arraySupplied) => {    
    arraySupplied.sort(function(a, b){return a-b});
    let min = arraySupplied[0];
    let max = arraySupplied[arraySupplied.length -1];
    if (min === max)
      return [min];
    else
     return [min, max];
 }

}
