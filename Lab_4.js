function fibonacciNumbers(n) {
    if(n==0)    document.getElementById("result").textContent = "Fibonacci Series up to " + n + " terms: 0";
    else if(n==1)   document.getElementById("result").textContent = "Fibonacci Series up to " + n + " terms: 0, 1";
    else {
        let fibSeries = [0, 1];
        for(let i=2; i<n; i++) {
            fibSeries[i] = fibSeries[i-1] + fibSeries[i-2];
        }
        document.getElementById("result").textContent = "Fibonacci Series up to " + n + " terms: " + fibSeries.join(", ");
    }
    
}
let num = prompt("Enter the number of terms for Fibonacci series: ");
fibonacciNumbers(parseInt(num));