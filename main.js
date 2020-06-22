/** Step: 2
 * Look over the starter code. There are 15 arrays that each contain the digits of separate credit card numbers. They all have prefixes to reflect their status, i.e. variables that start with valid contain a valid number, whereas invalid do not, and mystery variables can be either. There is also a batch array that stores all of the provided credit cards in a single array.
 * 
 * You’ll use these arrays later to check if your functions are working properly.
 */ 

// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9];
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6];
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5];
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6];

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5];
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3];
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4];
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5];
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4];

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4];
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9];
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3];
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3];
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3];

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5];


// Add your functions below:
/** Step: 3
 * Create a function, validateCred() that has a parameter of an array. The purpose of validateCred() is to return true when an array contains digits of a valid credit card number and false when it is invalid. This function should NOT mutate the values of the original array.
 * 
 * To find out if a credit card number is valid or not, use the Luhn algorithm[https://en.wikipedia.org/wiki/Luhn_algorithm#Description]. Generally speaking, an algorithm is a series of steps that solve a problem — the Luhn algorithm is a series of mathematical calculations used to validate certain identification numbers, e.g. credit card numbers. The calculations in the Luhn algorithm can be broken down as the following steps:
 *  - Starting from the farthest digit to the right, AKA the check digit, iterate to the left.
 *  - As you iterate to the left, every other digit is doubled (the check digit is not doubled). If the number is greater than 9 after doubling, subtract 9 from its value.
 *  - Sum up all the digits in the credit card number.
 *  - If the sum modulo 10 is 0 (if the sum divided by 10 has a remainder of 0) then the number is valid, otherwise, it’s invalid. 
 * 
 * Here’s a 'visual that outlines the steps'[https://codecademy-content.s3.amazonaws.com/PRO/independent-practice-projects/credit-card-checker/diagrams/cc+validator+diagram+1.svg]. Check your function using both the provided valid and invalid numbers.
 * 
 * HINT: 
 * Using the Luhn algorithm involves iterating through an array backward. You can also make use of the % (modulo) operator to check if the element needs to doubled or not (per step 2).
 * Alternatively, another series of steps that accomplishes the same goal can be found at 'Free Formatter’s Luhn algorithm implementation'[https://www.freeformatter.com/credit-card-number-generator-validator.html#howToValidate].
 * If you’re following Free Formatter’s method, it is replicated by following these steps:
 *  - Remove the last element from the array, (but remember, you don’t want to alter the original array!).
 *  - Reverse the array (now without the last digit).
 *  - Multiply the digits in odd positions (e.g. first digit, third, fifth…etc) by 2. If the resulting number is over 9, subtract 9 from the number.
 *  - Add up all the numbers in the array as well as the dropped digit from step 1. If the sum modulo 10 is 0 then the array contains a valid number. Conversely, if the result is any number but 0, then the array contains an invalid number.
 * Take a look at this 'diagram that illustrates the steps using a valid number as an example'[https://codecademy-content.s3.amazonaws.com/PRO/independent-practice-projects/credit-card-checker/diagrams/cc+validator+diagram+2.svg].
 * 
 */
// Validation by Luhn Algorithm (https://en.wikipedia.org/wiki/Luhn_algorithm#Description) Visual that outline the steps (https://codecademy-content.s3.amazonaws.com/PRO/independent-practice-projects/credit-card-checker/diagrams/cc+validator+diagram+1.svg)
function validateCred (cardNo) {
  let total = 0; 

  for (let i = cardNo.length - 1 ; i >= 0 ; i--){
    let currentVal = cardNo[i];
    if ((cardNo.length - 1 - i) % 2 === 1) /*(i % 2 === 0)*/ {
      currentVal *= 2;
      if (currentVal > 9) {
        currentVal -= 9;
      }
    }
    total += currentVal;
  }

  return (total % 10 === 0) ? true : false;
}

// Test function: validateCred
//console.log(validateCred(valid1)); // Should print true
//console.log(validateCred(invalid1)); // Should print false
/*for (let i = 0 ; i < batch.length ; i++) {
  console.log(validateCred(batch[i]));
}*/


/** Step: 4
 * Create another function, findInvalidCards() that has one parameter for a nested array of credit card numbers. The role of findInvalidCards() is to check through the nested array for which numbers are invalid, and return another nested array of invalid cards.
 * 
 * HINT:
 * Loop through the nested array and use the validateCred() function that you’ve created before to check if the number is valid. You’ll also need another array to keep track of all the invalid credit card numbers. 
 */
// to check through the nested array for which numbers are invalid, and return another nested array of invalid cards.
function findInvalidCards (cards) {
  const inValidCards = [];

  for (let i = 0 ; i < cards.length ; i++) {
    let currentCard = cards[i];
    if ( !validateCred(currentCard) ) {
      inValidCards.push(currentCard);
    }
  }
  return inValidCards;
}

// Test function: findInvalidCards
//console.log(findInvalidCards([valid1, valid2, valid3, valid4, valid5]));// Shouldn't print anything
//console.log(findInvalidCards([invalid1, invalid2, invalid3, invalid4, invalid5])); // Should print all of the numbers
//console.log(findInvalidCards(batch)); // Test what the mystery numbers are

/** Step: 5
 * After finding all the invalid credit card numbers, it’s also necessary to identify the credit card companies that have possibly issued these faulty numbers. Create a function, idInvalidCardCompanies() that has one parameter for a nested array of invalid numbers and returns an array of companies.
 * Currently, there 4 accepted companies which each have unique first digits. The following table shows which digit is unique to which company:
 *              First         Digit	Company
 *              3	            Amex (American Express)
 *              4            	Visa
 *              5           	Mastercard
 *              6           	Discover
 * If the number doesn’t start with any of the numbers listed, print out a message like: “Company not found”.
 * idInvalidCardCompanies() should return an array of companies that have mailed out cards with invalid numbers. This array should NOT contain duplicates, i.e. even if there are two invalid Visa cards, "Visa" should only appear once in the array.
 * 
 * HINT:
 * You can use another array to store the names of companies to contact. When iterating through the array of invalid numbers, check the first digit of the number and see if the company already exists in the new array. If the company is not already there, then add the new company. You can use a series of if... else if statements or a switch statement to match the first digit to the company.
 * The '.indexOf()'[https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf] method can be helpful for checking if an element already exists in an array.
 * 
 */
// To identify the credit card companies that have possibly issued these faulty numbers.
function idInvalidCardCompanies (inValidCards) {
  const inValidCardCompanies = [];

  for (let i = 0 ; i < inValidCards.length ; i++) {
    let codeFound = inValidCards[i][0];
    //console.log(codeFound);
    
    if(codeFound === 3) {
      if (inValidCardCompanies.indexOf('Amex') === -1) {
          inValidCardCompanies.push('Amex');
        }
    } else if (codeFound === 4) {
      if (inValidCardCompanies.indexOf('Visa') === -1) {
          inValidCardCompanies.push('Visa');
        }
    } else if (codeFound === 5) {
      if (inValidCardCompanies.indexOf('Mastercard') === -1) {
          inValidCardCompanies.push('Mastercard');
        }
    } else if (codeFound === 6) {
      if (inValidCardCompanies.indexOf('Discover') === -1) {
          inValidCardCompanies.push('Discover');
        }
    } else {
      console.log('Company not found');
    }
    /*switch (inValidCards[i][0]) {
      case 3:
        if (inValidCardCompanies.indexOf('Amex') === -1) {
          inValidCardCompanies.push('Amex');
        }
      case 4:
        if (inValidCardCompanies.indexOf('Visa') === -1) {
          inValidCardCompanies.push('Visa');
        }
      case 5:
        if (inValidCardCompanies.indexOf('Mastercard') === -1) {
          inValidCardCompanies.push('Mastercard');
        }
      case 6:
        if (inValidCardCompanies.indexOf('Discover') === -1) {
          inValidCardCompanies.push('Discover');
        }
      default:
        console.log('Company not found');      
    } //switch end*/

  } // loop end
  
  return inValidCardCompanies;
}

// Test function: idInvalidCardCompanies
//console.log(idInvalidCardCompanies([invalid1])); // Should print['visa']
//console.log(idInvalidCardCompanies([invalid2])); // Should print ['mastercard']
///console.log(idInvalidCardCompanies([invalid1, invalid2, invalid3, invalid4, invalid5])) //should print[ 'Visa', 'Mastercard', 'Amex', 'Discover' ]
//console.log(idInvalidCardCompanies(batch)); // Find out which companies have mailed out invalid cards
//console.log(idInvalidCardCompanies(findInvalidCards(batch)).join('\n'));

/** Step: 7
 * If you’d like to challenge yourself further, you could consider the following:
 *  - Use different credit card numbers from 'a credit card number generator and validator site'(https://www.freeformatter.com/credit-card-number-generator-validator.html) and test if your functions work for all types of credit cards.
 *  - To make it easier to test credit card numbers, create a function that accepts a string and converts it into an array of numbers like the initially provided arrays. (Check the hint for a helpful function) 
 *  - Create a function that will convert invalid numbers into valid numbers.
 * HINT : If you need to convert strings to numbers, parseInt()[https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt] can help you do that.
 * 
 */



/**
 * For more Help : https://gist.github.com/codecademydev/237f1834dbee4d0bf0b604c460507f58
 */
