// Array.prototype.concat();

var items = [1, 2];

var newItems = items.concat(5); // concat a single number, output: [1,2,5]
console.log(newItems);

newItems = items.concat(3, 5, 6); // concat multiple number, output: [ 1, 2, 3, 5, 6 ]
console.log(newItems);

newItems = items.concat(3, 5, 6, 'string', undefined); // concat multiple any type, output: [ 1, 2, 3, 5, 6, 'string', undefined ]
console.log(newItems);

newItems = items.concat([3, 5, 6]); // concat a array, output: [ 1, 2, 3, 5, 6 ]
console.log(newItems);

newItems = items.concat([3, 5], 6, [7, 8]); // concat multiple array, output: [ 1, 2, 3, 5, 6, 7, 8 ]
console.log(newItems);
