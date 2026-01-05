//2. Create a function calculateTotal that takes an arbitrary number of numeric values (using the rest operator) and returns their sum.Example Input: calculateTotal (10, 20, 30, 40) Example Output: 100
function calculateTotal(...numbers){
    let sum =0;
    for(let i =0; i<numbers.length;i++){
        sum+=numbers[i];
    }
    return sum
}

let n = prompt("Enter Size")
let numbers =[]
for(let i = 0; i<n; i++){
    let value = Number(prompt(`Enter the value of ${i+1} number:`))
    numbers.push(value)
}
document.getElementById("result").innerHTML = "Total sum of the array is :"+calculateTotal(...numbers)