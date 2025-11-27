// Start the loading simulation
let count = 0;

const loader = setInterval(() => {
    console.log("Loading...");
    count++;

    // Stop after 5 seconds (5 intervals)
    if (count === 5) {
        clearInterval(loader);
        console.log("Loaded successfully!");
    }
}, 1000); // Runs every 1 second
