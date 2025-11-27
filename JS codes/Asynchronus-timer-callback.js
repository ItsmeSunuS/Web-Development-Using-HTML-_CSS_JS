// Function that simulates a timer with a given duration
function timer(duration, onComplete) {
    setTimeout(() => {
        // Timer finished, call onComplete with the finish message
        onComplete(`Timer of ${duration} ms finished`);
    }, duration);
}

// Example usage of the timer function
timer(2000, (message) => {
    console.log(message);  // This will log "Timer of 2000 ms finished" after 2 seconds
});
