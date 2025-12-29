//Write a js program to check a given number is prime or not
function isPrime(num) {
    if (num <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}
let inputValue = prompt("Enter a number to check if it is prime or not: "); 
if(isPrime(parseInt(inputValue))) {
    console.log(inputValue + " is a prime number.");
}
else {
    console.log(inputValue + " is not a prime number.");
}   