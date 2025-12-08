//Sum of n numbers
function sumOfNNumbers(n) {
    let sum = 0;
    for(let i = 1; i <= n; i++) {
        sum += i;
    }
    document.getElementById("result").textContent = "The sum of first " + n + " natural numbers is: " + sum;
}
let num = prompt("Enter a number to find the sum of first n natural numbers: ");
sumOfNNumbers(parseInt(num));
