Array.prototype.reduce = function(cb, initialValue) {
    var accumulator = initialValue !== undefined ? initialValue : this[0];
  
    for (var i = initialValue !== undefined ? 0 : 1; i < this.length; i++) {
      accumulator = cb(accumulator, this[i]);
    }
  
    return accumulator;
  };
  
  const arr = [1, 2, 3, 4, 5, 6, 7];
   
  const reduceValue = arr.reduce((acc, num) => {
    return acc + num;
  }, 0);
   
  console.log("value", reduceValue);
  