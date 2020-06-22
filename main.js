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
// Validation by Luhn Algorithm 
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


/**
 * For more Help : https://gist.github.com/codecademydev/237f1834dbee4d0bf0b604c460507f58
 */
