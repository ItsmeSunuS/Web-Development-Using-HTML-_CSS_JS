// Import boxen
const boxen = require('boxen');

// Define the message and title
const message = 'I am using my first external module!';
const title = 'Hurray!!!';

// Default (classic) box
const classicBox = boxen(message, {
  title: title,
  padding: 1
});

// SingleDouble border box
const singleDoubleBox = boxen(message, {
  title: title,
  padding: 1,
  borderStyle: 'singleDouble'
});

// Round border box
const roundBox = boxen(message, {
  title: title,
  padding: 1,
  borderStyle: 'round',
  borderColor: 'green',
  backgroundColor: 'black'
});


// Print boxes
console.log(classicBox);
console.log(singleDoubleBox);
console.log(roundBox);
