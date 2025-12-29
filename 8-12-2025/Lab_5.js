//GCD
function gcd(a, b) {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}
let num1 = prompt("Enter the first number: ");
let num2 = prompt("Enter the second number: ");
let result = gcd(parseInt(num1), parseInt(num2));
document.getElementById("result").textContent = "The GCD of " + num1 + " and " + num2 + " is: " + result;
