// Unless stated otherwise, your code should go _only_ inside the anonymous function below.
(function () {

  // 1. Show array apples.
  const apples = [1, 3, 5, 7, 9];
  console.log(apples);

  // 2. Show how many elements are in array apples.
  console.log(`apples has ${apples.length} items`);

  // 3. Calculate the sum of the numbers in array apples.
  let sum = 0;
  for (let i = 0; i < apples.length; i++) {
    sum += apples[i];
  }
  // show the final result
  console.log('apples ' + sum);


  // 4. Show array bakers.
  const bakers = [9, 0, 3, 8, 4, 2, 6, 1, 7, 5];
  console.log(bakers);

  // 5. Calculate the sum of the numbers in array bakers.
  let add = 0;
  for (let i = 0; i < bakers.length; i++) {
    add += bakers[i];
  }

  // show the final result
  console.log('bakers ' + add)


  // 6a. Calculate the sum of the numbers in the even indices of array bakers.
  let adds = 0;
  for (let i = 0; i < bakers.length; i += 2) {
    adds += bakers[i];
  }

  // show the final result
  console.log(adds)

  // 6b. Calculate the sum of the even numbers in array bakers.
  let evens = 0;
  for (let i = 0; i < bakers.length; i++) {
    if (bakers[i] % 2 === 0) {
      evens = evens + bakers[i];
    }
  }
  
  // show the final result
  console.log(evens)


  // 7. Show array cards.
  const cards = [
    1, 0, 8, 14, 10, 6, 4, 22, 15, 24, 15, 13, 13, 5, 0, 25, 21, 24, 24, 17, 4,
    19, 15, 19, 9,
  ];
  console.log(cards);

  // 8. Determine *if* 15 is in array cards, and display the answer.
  // Note: There _is_ a built-in array.includes method to do this.
  //       Usually, you will use that method. But for this
  //       exercise, write it with a loop.
  // Usual way to find if an array has some value, such as 15.
  // show the final result
  for (let i = 0; i < cards.length; i++) {
    if (cards[i] === 15) {
      console.log(cards[i]);
    }
  }

  // 9. Determine *where* 15 first appears in array cards.
  // Note: There _is_ a built-in array.indexOf method to do this.
  //       Usually, you will use that method. But for this
  //       exercise, write it with a loop.
  // Usual way to find the index of some value, such as 15:
  // show the final result
  for (let i = 0; i < cards.length; i++) {
    if (cards[i] === 15) {
     console.log(`Number 15 appears on card numbers ${[i]}`); 
    }
  }

  // 10. How many times does 15 appear in array cards?
let fifteen = cards.filter(card => card === 15);

  // show the final result
console.log(`15 appears ${fifteen.length} times`);

  // 11. How many times does 0, 4 any 13 appear in array cards?
  let number = cards.filter(card => card === 0 || card === 4 || card === 13);
  
  // show the final result
  console.log(`The numbers 0, 4, and 13 together show up ${number.length} times combined`);

  // 12. Which positions in array cards hold a 15?
  positions = [];

  //set variable where first index of 15 is located
  let firstNum = cards.indexOf(15);

  //add 1 to firstIndex b/c second param of indexOf is index number where we wanna begin search, we wanna start looking after the first instance
  let secondNum = cards.indexOf(15, (firstNum +1));
  let thirdNum = cards.indexOf(15, (secondNum +1));
  positions.push(firstNum,' ' +  secondNum,' ' + thirdNum);
  
  // show the final result
  console.log(`These positions in the cards array hold a 15: ${positions}`);

  // 13. How many numbers are in array cards are even?
let evemNumbers = cards.filter(card => {
  return card % 2 ===0;
})
  // show the final result
console.log(`There are ${evemNumbers.length} even numbers`)

  // 14. Show array dogs.
  const dogs = [
    29, 29, 17, 23, 23, 29, 17, 29, 17, 29, 23, 29, 23, 23, 29, 29, 23, 23, 17,
    23, 29, 29, 23, 29, 17,
  ];
  console.log(dogs);

  // 15. How large is array dogs?
  console.log(`The dogs array has ${dogs.length} items`);

  // 16. Calculate whether there are more than 8 29s in array dogs.
  let nums = dogs.filter(dog => dog === 29);
  if(nums.length > 8){
    console.log('There are more than 8 29s in array dogs.');
  }else{
    console.log('There are less than 8 29s in array dogs.');
  }

  // 17. Calculate whether there are more than 20 17s and 23s combined.
  let total = dogs.filter(dog => dog === 17 || dog === 23);
  if(total.length > 20){
    console.log('There are more than 20 17s and 23s combined.');
  }else{
    console.log('There are less than 20 17s and 23s combined.');
  }

  // 18. Calculate how many 29s are in array dogs.
console.log(`There are ${nums.length} 29s in the dogs array `)

  // 19. Calculate how many 23s and 17s combined are in array dogs.
console.log(`There are ${total.length} 17s and 23s combined`)


  // YOU CAN STOP HERE -- July 5th, 2022
  // 20. Show array eggs.
  const eggs = [81, 75, 75, 81, 32, 75, 81, 75, 81];

  // 21. How large is array eggs?

  // 22. How many 32s are in array eggs?

  // 23. Does array eggs have only 75s and 81s?


})();

// Stretch Goal Exercise 1 

// Timer Challenge:

// Use the event timer function to animate the included sprite images of 'guy' images (in guy folder).
//  Start with an initial image of guy1.png then every .5 second (500 ms) 
//  update the image to the next one in sequence. Once you reach image guy9.png 
//  start over with the guy1.png image.