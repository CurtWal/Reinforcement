// #### Exercise 1
// 1. Create an array.
// 2. Add four names to the array.
// 3. Print the array one entry at a time.

// let randomNames = ["James", "Sam", "Ben", "Sarah"];
// for (let i = 0; i < randomNames.length; i++)
//     console.log(randomNames[i]);
function names(){
    let namesArray = [];
    namesArray.push("James", "Sam", "Ben", "Sarah");
    for (let i = 0; i < namesArray.length; i++)
    console.log(namesArray[i]);
}
names();

// #### Exercise 2
// 1. Create an array with 5 numbers in it.
// 2. Print the numbers one entry at a time.

// let nums = [1, 5, 15, 25, 30];
    // for (let i = 0; i < nums.length; i++)
    //     console.log(nums[i]);

    let nums = [];
    nums.push(1, 5, 15, 25, 30);
    for(let i = 0; i < nums.length; i++)
    console.log(nums[i]);



// #### Exercise 3
// 1. Create an array with 4 names.
// 2. Print the third item in the array.
// 3. Delete the second item.
// 4. Print the third item in the array again.

let people = ["Tom", "Jack", "Liz", "John"];
console.log(people[2]);
people.splice(1, people.length -3);
console.log(people[2]);

// ### Exercise 4 
// Create the array [5,3,7, 4]. Pass the array to a new 
// function to do the following:

// Print the array.
// Print the 3rd element of the numberList.
// Delete the second element.
// Print the 3rd index element.

let arr = [5, 3, 7, 4];
    console.log(arr);
    console.log(arr[2]);
    arr.splice(1, arr.length - 3);
    console.log(arr[2]);




// ### Exercise 5 

// Given an array of integers, use the 'map' method to create a new array in which the double of each integer in the first array is stored, and log it to the console.

// [477, 8914, 40461, 599148]; => [954, 17828, 80922, 1198296]

let numbyTwo = [477, 8914, 40461, 599148];

let numTimesTwo = numbyTwo.map(num => num * 2);
console.log(numTimesTwo);



// ### Exercise 6

// Given an array of singular nouns, use the map function create a new array that stores the plural noun of each of the words in the first array, and log it to the console (assume that the singular nouns can be made plural by adding a 's').

// [ 'pen', 'book', 'code' ] => ['pens', 'books', 'codes']

let add = ['pen', 'book', 'code'];

let addAs = add.map(s => s + 's');
console.log(addAs);


// ### Exercise 7 

// Given an array of costs of different products, use the filter function to create a new array with the costs from the input array if the cost is <= $350, and print it to the console.


// [390, 190, 311.85, 67, 19048, 5000, 670] => [190, 311.85, 67]

let cost = [390, 190, 311.85, 67, 19048, 5000, 670];

let price = cost.filter(prices => prices <= 350);
console.log(price);



// ### Exercise 8

// Given an array of objects with the city name and population, use the filter funciton to create an array with objects from the first array if the population of that particular city is >= 5 million.

let places = [
    { "name": "Shanghai", "population": 24300000 },
    { "name": "Los Angeles", "population": 3792621 },
    { "name": "New Delhi", "population": 21800000 },
    { "name": "Mumbai", "population": 18400000 },
    { "name": "Chicago", "population": 2695598 },
    { "name": "Houston", "population": 2100263 },
];

let lived = places.filter(place => (place.population >= 5000000));
console.log(lived);



// ### Exercise 9 

// (i) Given an array of numbers, find the sum of every element in the array, and log it to the console.

// [1, 2, 3, 4, 5] =>  15

let addsum = [1, 2, 3, 4, 5];
let sum = 0;
for (i = 0; i < addsum.length; i++) {
    sum += addsum[i];

}
console.log(sum);



// ### Exercise 10 

// Given an array of numbers, find the average of them, and log it to the console.

// [1, 2, 3, 456, 108115, 45909.15154, 1988.1545, 145e8] => 1812519559.288255

let together = [1, 2, 3, 456, 108115, 45909.15154, 1988.1545, 145e8];
let average = 0;
for (i = 0; i < together.length; i++) {
    average += together[i] / together.length;
}
console.log(average);