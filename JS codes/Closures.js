function createCounter() {
    let count = 0; 

    return {
        increment: function () {
            count++;
            console.log("Current count:", count);
        },
        decrement: function () {
            count--;
            console.log("Current count:", count);
        },
        getCount: function () {
            console.log("Current count:", count);
        }
    };
}

//Example
const counter1 = createCounter();
const counter2 = createCounter();

counter1.increment(); // Current count: 1
counter1.increment(); // Current count: 2

counter2.increment(); // Current count: 1 (independent from counter1)
counter2.decrement(); // Current count: 0
