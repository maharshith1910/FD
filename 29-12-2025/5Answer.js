const countVowels = str => str.match(/[aeiouAEIOU]/g)?.length || 0;
let str = prompt("Enter a string:");
const vowelCount = countVowels(str);
document.getElementById("result").innerHTML = `The number of vowels in "${str}" is: ${vowelCount}`;
