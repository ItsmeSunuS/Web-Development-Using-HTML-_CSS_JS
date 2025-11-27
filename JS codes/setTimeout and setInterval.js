const readline = require("readline");

// Setup input listener
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter countdown time in seconds: ", (input) => {
    let timeLeft = parseInt(input);
    if (isNaN(timeLeft) || timeLeft <= 0) {
        console.log("Please enter a valid number.");
        rl.close();
        return;
    }

    console.log(`Starting countdown from ${timeLeft} seconds...`);
    console.log('Press "s" anytime to stop the countdown.');

    // Start countdown
    const timer = setInterval(() => {
        console.log(`Time left: ${timeLeft}`);
        timeLeft--;

        if (timeLeft < 0) {
            clearInterval(timer);
            console.log("Countdown Complete!");
            rl.close();
        }
    }, 1000);

    // Delay checking for user input using setTimeout
    setTimeout(() => {
        process.stdin.on("data", (key) => {
            if (key.toString().trim() === "s") {
                console.log("Countdown stopped by user.");
                clearInterval(timer);
                rl.close();
            }
        });
    }, 500); // start listening after half a second
});
