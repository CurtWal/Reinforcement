//  ### Exercise 1

// Define a function max() that 
// takes two numbers as arguments and 
// returns the largest of them. 
// Use the if-then-else construct 
// available in Javascript.

function max(){
    let num1 = 15;
    let num2 = 20;
if (num1 > num2)
console.log(num1);
else{
    (num2 > num1)
    console.log(num2);}
}
max()



// ### Exercise 2

// Define a function maxOfThree() that takes 
// three numbers as arguments and returns 
// the largest of them.

function maxOfThree(){
    let num1 = 25;
    let num2 = 55;
    let num3 = 12;

    if(num1 > num2 && num1 > num3){
    console.log(num1);}
    else if
        (num2 > num1 && num2 > num3)
        {console.log(num2)}
    else
        {console.log(num3);}
}
maxOfThree()



// ### Exercise 3

// Write a function that takes a character 
// (i.e. a string of length 1) and returns true if it is a 
// vowel, false otherwise.

function vowel(){
    let vowels = ['a','e','i','o','u'];
    let letter = 'a';
    for(let i = 0; i < vowels.length; i++){
        if(letter = vowels){
        console.log(true)
    }
    else{console.log(false);
    }
    }
}
vowel()


// ### Exercise 4 

// Define a function sum() and a function multiply() that sums and 
// multiplies (respectively) all the numbers in an array of numbers.
//  For example, sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) 
//  should return 24.

function sumAndMultiply(){
    let numsArr = [1,2,3,4]
    let sum = 0;
    let multiply = 1;
    for(let i = 0; i <numsArr.length; i++){
        sum += numsArr[i];
        multiply *= numsArr[i];
    }
    console.log(sum);
    console.log(multiply);
}
sumAndMultiply();







// ### Exercise 5 
// Define a function reverse() that computes the reversal of a string. For example, 
// reverse("jag testar") should return the string "ratset gaj".

function random(){
    let arr = ["reverse", "this", "will"];
        console.log(arr.reverse())
}
random()