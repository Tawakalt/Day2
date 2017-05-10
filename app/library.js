'use strict';

module.exports = {

 dataTypes: (argumentSupplied) => {
    if (typeof(argumentSupplied) == "string")
      return argumentSupplied.length;
    else if (typeof(argumentSupplied) == "number"){
      if (argumentSupplied === 100)
        return 'equal to 100';
      else if (argumentSupplied < 100)
        return 'less than 100';
      else 
        return 'more than 100';
    }
    else if (typeof(argumentSupplied) == "boolean"){
        return argumentSupplied;
    }
    else if ((argumentSupplied === undefined) || (argumentSupplied === null))
      return "no value";
    else if ((argumentSupplied.constructor === Array) && (argumentSupplied.length >= 3) )
        return argumentSupplied[2];
    else if (typeof(argumentSupplied) == "function"){
        return argumentSupplied(true);
    }
  }
}
