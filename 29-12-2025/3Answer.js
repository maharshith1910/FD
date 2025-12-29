let n = prompt("Enter array size:");
let arr = [];

for (let i = 0; i < n; i++) {
    let element = prompt(`Enter element ${i + 1}:`);
    arr.push(Number(element));
}

const result = arr.filter(x => x%2 === 0);
document.getElementById("result").innerHTML = "The even array elements are: " + result.join(", ");