// 1. Declare a global variable
let age = 25;

// 2. Function that reads the global variable
function displayAge() {
    console.log("Age inside displayAge():", age);
}

// 3. Function that updates the global variable
function changeAge() {
    age = 30; 
    console.log("Age updated inside changeAge():", age);
}

// Calling the functions
displayAge();   // Output: Age inside displayAge(): 25
changeAge();    // Output: Age updated inside changeAge(): 30
displayAge();   // Output: Age inside displayAge(): 30
