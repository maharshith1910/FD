//Square root of the equation
function calculateSquareRoot(a, b, c) {
    let discriminant = b * b - 4 * a * c;

    if (discriminant < 0) {
        document.getElementById("result").textContent = "No real roots exist.";
        return;
    }   
    let root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    let root2 = (-b - Math.sqrt(discriminant)) / (2 * a);   
    document.getElementById("result").textContent = "The roots of the equation are: " + root1 + " and " + root2;
}   
let a = prompt("Enter coefficient a: ");
let b = prompt("Enter coefficient b: ");
let c = prompt("Enter coefficient c: ");

calculateSquareRoot(parseFloat(a), parseFloat(b), parseFloat(c));
    