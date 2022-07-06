// - Exercise 1
// Create two variables. One should equal 
// “My name is: “ and the other should 
// equal your name. 
// Print the two variables in one print message.

let names = "My name is "
let person = "Curtrick"
console.log(names + person)



// - Exercise 2
//     Ask the user “What is your balance”.
//     Make sure to save that answer in a variable 
//     balance. 
let balances = prompt('What is your balance');

// Subtract 10 from that balance. 
let newBalance = balances - 10;

//     Print "You lost $10. Your new balance is: 
//     [THE BALANCE]".
console.log("You lost $10. Your new balance is: " + newBalance); 



// - Exercise 3
//     Create a variable. Ask the user to 
//     “Enter your number grade”. 
let grade = parseInt(prompt("Enter your number grade "));

// Ask the user 
//     “Enter your extra credit". 
let credit = parseInt(prompt("Enter your extra credit"));

// Print the grade 
//     plus extra credit.
let newGrade = grade + credit;
console.log(newGrade);



// - Exercise 4
//     Create a variable called balance and save 
//     it after asking the user “What is your 
//     balance?”. 
let balance = prompt("What is your balance?");

// Create a variable called 
//     deduction and save it when asking the 
//     user “How much do you want to deduct?” 
let deduction = prompt("How much do you want to deduct?");

//     Print the remaining balance after 
//     subtracting the deduction.
let newAmount = balance - deduction;
console.log(newAmount);