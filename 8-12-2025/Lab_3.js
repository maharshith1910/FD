//Write a js program to check a given number is palindrome or not
function isPalindrome(num) {
    let rev = 0;
    let temp = num;
    while (temp > 0) {
        let digit = temp % 10;
        rev = rev * 10 + digit;
        temp = Math.floor(temp / 10);
    }
    return rev === num;
}
let num = prompt("Enter a number to check if it is palindrome or not: "); 
if(isPalindrome(parseInt(num))) {
    document.getElementById("result").textContent = num + " is a palindrome number.";
} else {
    document.getElementById("result").textContent = num + " is not a palindrome number.";
}