// Function that displays a greeting message
function displayMessage(name) {
    console.log(`Hello, ${name}!`);
}

// Function that simulates retrieving user input after 1 second
function getUserInput(callback) {
    setTimeout(() => {
        const username = "Alice";  // Simulated fetched username
        callback(username);       // Call the callback with the username
    }, 1000);
}

// Use getUserInput with displayMessage as the callback
getUserInput(displayMessage);
