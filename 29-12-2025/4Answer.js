const isPalindrome = str => str === str.split('').reverse().join('');
let str = prompt("Enter a string:");
if (isPalindrome(str)) {
    document.getElementById("result").innerHTML = `"${str}" is a palindrome.`;
} else {
    document.getElementById("result").innerHTML = `"${str}" is not a palindrome.`;
}