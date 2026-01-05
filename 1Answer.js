//1. Write a function mergeArrays that accepts any number of arrays as arguments and merges them into a single array. Use the spread operator to accomplish this.Example Input: mergeArrays ([1, 2], [3, 4], [5, 6]) Example Output: [1, 2, 3, 4, 5, 6]

function mergeArrays(...arrays) {
        return [].concat(...arrays);
    }


let n = Number(prompt("Enter number of arrays:"));
let allArrays = [];

for (let i = 0; i < n; i++) {
    let z = Number(prompt(`Enter size of array ${i + 1}:`));
    let tempArray = [];

    for (let j = 0; j < z; j++) {
        let value = Number(prompt(`Enter element ${j + 1} of array ${i + 1}:`));
        tempArray.push(value);
    }

    allArrays.push(tempArray);
}

const result = mergeArrays(...allArrays);
document.getElementById("result").innerHTML ="Merged Array: [" + result.join(", ") + "]";