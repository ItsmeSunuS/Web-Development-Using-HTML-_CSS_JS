function isPrime(num) {
    if (num <= 1) return false; 

    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false; 
        }
    }

    return true; 
}

console.log(isPrime(7));   
console.log(isPrime(10));  
console.log(isPrime(2));   
  
////EVEN OR ODD


function checkEvenOdd(num) {
    if (num % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
}


console.log(checkEvenOdd(10)); 
console.log(checkEvenOdd(7));  