
var age = Number(prompt("what is your age?"));

console.log("Age is " + age);

if (age < 0){
    console.log("Error");
}

if (age === 21){
    console.log("Happy 21st birthday");
}

if (age % 2 !== 0){
    console.log("Your age is odd");
} 

if (Math.sqrt(age) % 1 === 0){
    console.log("Perfect square");
}
