let n = prompt("Enter array size:");
let arr = [];
for (let i = 0; i < n; i++) {
    let element = prompt(`Enter element ${i + 1}:`);
    arr.push(Number(element));
}

const sumArray = arr.reduce((a, b) => a + b, 0);
document.getElementById("result").innerHTML = "The sum of the array Elements is : " +sumArray;