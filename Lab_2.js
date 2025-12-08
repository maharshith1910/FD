//Write a js program to check a given number is amstrong or not
function isArmstrong(num) {
    let sum = 0;
    let temp = num;
    const digits = num.toString().length;
    while (temp > 0) {
        let digit = temp % 10;
        sum += Math.pow(digit, digits);
        temp = Math.floor(temp / 10);
    }
    return sum === num;
}
let inputValue = prompt("Enter a number to check if it is Armstrong or not: "); 
if(isArmstrong(parseInt(inputValue))) {
    console.log(inputValue + " is an Armstrong number.");
}
else {
    console.log(inputValue + " is not an Armstrong number.");
}       