// 1. TEMPLATE LITERALS

// a)
console.log(`5 + 7 = ${5 + 7}`);

// b)
const multiLine = `
Line 1
Line 2
Line 3
`;
console.log(multiLine);

// c)
const firstName = "John";
const lastName = "Doe";
console.log(`${firstName} ${lastName}`);


// 2. ARROW FUNCTIONS & THIS

// a)
const square = n => n * n;

// b)
const obj1 = {
  value: 50,
  test: () => console.log(this.value)  // undefined
};
obj1.test();

// c) Fix using normal function
const obj2 = {
  value: 50,
  test: function() {
    console.log(this.value);
  }
};
obj2.test();



// 3. REST, SPREAD & COPYING OBJECTS

const product = { name: "Pen", price: 10 };

// a)
const productCopy = { ...product };

// b)
const a = { x: 1 };
const b = { y: 2 };
const mergedAB = { ...a, ...b };

// c)
const maxValue = (...nums) => Math.max(...nums);


// 4. DESTRUCTURING & OPTIONAL CHAINING

const arr = [10, 20, 30];
const [a1, b1] = arr;

const laptop = { brand: "Dell", ram: "8GB" };
const { brand } = laptop;

const info = {};
console.log(info?.user?.profile);


// 5. SCOPING (let / var / const)

// a) var
for (var i = 0; i < 3; i++) {}
console.log(i);  // 3

// b) let
for (let j = 0; j < 3; j++) {}
// console.log(j); // ReferenceError

// c)
const reasonConst = "const prevents reassignment";


// 6. TERNARY OPERATOR

let kmph = 75;
let speed = kmph > 60 ? "Fast" : "Normal";

let age = 20;
let ageResult = age >= 18 ? "Adult" : "Minor";

let num = -5;
let sign = num > 0 ? "Positive" : num === 0 ? "Zero" : "Negative";


// 7. SPREAD, REST & ARRAYS

const nums = [1, 2, 3];
const nums2 = [...nums, 4, 5];

const arrA = ["x", "y"];
const arrB = ["z"];
const combinedArr = [...arrA, ...arrB];

const printNames = (...names) => names;


// 8. OBJECT DESTRUCTURING & SHORTHAND

const user = { id: 101, status: "active" };
const { id, status } = user;

// shorthand
const role = "admin";
const userShort = { id, role };

// shorthand + method
const age2 = 25;
const person = {
  age2,
  greet() {
    console.log("Hello!");
  }
};


// 9. TEMPLATE LITERALS (More Practice)

console.log(`Today is: ${new Date().toDateString()}`);

const name = "Mark";
const score = 88;
console.log(`Hello ${name}, your score is ${score}/100`);


// 10. ARROW FUNCTION SHORTHANDS

const add = (a, b) => a + b;
const isAdult = age => age >= 18;
const double = n => n * 2;


// 11. SPREAD OPERATOR (Arrays & Objects)

const arrClone = [...nums];

const arrWith100 = [100, ...nums];

const obj1a = { a: 1 };
const obj2a = { a: 9, b: 2 };
const mergedOverride = { ...obj1a, ...obj2a };


// 12. OPTIONAL CHAINING (More Practice)

const userX = {
  name: "Alex",
  address: { city: "Bangalore" }
};

console.log(userX?.address?.city);
console.log(userX?.job?.title);

const data = {};
console.log(data?.info?.details?.city);  // prevented crash
