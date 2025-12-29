//destructuring an object
const student = {
    name: "Rahul",
    age: 20,
    course: "JavaScript"
};

const { name, age, course } = student;

document.getElementById("output").innerHTML =
    name + " " + age + " " + course;

// destruturing an array
const numbers = [10, 20, 30];

const [a, b, c] = numbers;

document.getElementById("output").innerHTML +="<br>"+
    a + " " + b + " " + c;


    const user = {
    username: "admin",
    password: "1234"
};

//Destructuring with Renaming
const { username: u, password: p } = user;

document.getElementById("output").innerHTML +="<br>"+
    u + " " + p;

//Destructuring with Function

function display({ title, price }) {
    document.getElementById("output").innerHTML +="<br>"+
        title + " " + price;
}

const product = {
    title: "Laptop",
    price: 50000,
    brand: "HP"
};

display(product);

//Destructuring with Rest Operator
const marks = [90, 85, 80, 75];

const [first, second, ...others] = marks;

document.getElementById("output").innerHTML +="<br>"+
    first + " " + second + " " + others;
