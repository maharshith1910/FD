let n = prompt("Enter array size:");
let arr = [];

for (let i = 0; i < n; i++) {
    let element = prompt(`Enter element ${i + 1}:`);
    arr.push(Number(element));
}

document.getElementById("result").innerHTML = "The array elements are: " + arr.join(", ");

const doubledArr = arr.map(x => x * 2);
document.getElementById("result").innerHTML += "<br>Doubled array elements are: " + doubledArr.join(", ");

const doubledFilteredArr = doubledArr.filter(x => x > 20);
document.getElementById("result").innerHTML += "<br>Doubled elements greater than 20 are: " + doubledFilteredArr.join(", ");