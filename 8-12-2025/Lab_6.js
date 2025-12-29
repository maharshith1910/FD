//Factorial
function factorial(n) {
    if(n < 0) {
        document.getElementById("result").textContent = "Factorial is not defined for negative numbers.";   
        return;
    }
    let fact = 1;       
    for(let i = 1; i <= n; i++) {
        fact *= i;
    }
    document.getElementById("result").textContent = "The factorial of " + n + " is: " + fact;
}
let num = prompt("Enter a number to find its factorial: ");
factorial(parseInt(num));
