// Attach vallidation checks to the submit button
let subscribe = document.getElementById("subscribe");

subscribe.addEventListener("click", firstNameValidation);
subscribe.addEventListener("click", lastNameValidation);
subscribe.addEventListener("click", ccChoiceValidaton);
subscribe.addEventListener("click", ccNumValidation);
subscribe.addEventListener("click", ccExpirationMonthValidation);
subscribe.addEventListener("click", ccExpirationYearValidation);
subscribe.addEventListener("click", ccCVVValidation);

// Make sure the user selected either a charge for a single month, or reoccurring


// If First Name field (id firstName) is empty, display custom valid message
function firstNameValidation () {
    let cardName = document.getElementById("firstName");
    if (firstName.validity.valueMissing) {
        firstName.setCustomValidity("Enter your first name as it appears on the card");
    } else {
        firstName.setCustomValidity("");
    }
}

function lastNameValidation () {
    let cardName = document.getElementById("lastName");
    if (lastName.validity.valueMissing) {
        lastName.setCustomValidity("Enter your last name as it appears on the card");
    } else {
        lastName.setCustomValidity("");
    }
}

// Make sure the user has selected a card from the radios.
function ccChoiceValidaton() {
    let card = document.forms.ccform.elements.credit[0];
    if (card.validity.valueMissing) {
        card.setCustomValidity("Choose your Credit Card provider.");
    } else {
        card.setCustomValidity("");
    }
}

// Make sure the user's number is real, as per the luhm algorithm
function ccNumValidation() {
    let ccNum = document.getElementById("creditCard");
    if (ccNum.validity.valueMissing) {
        ccNum.setCustomValidity("Enter the number as presented on your credit card.");
    } else if (ccNum.validity.patternMismatch) {
        ccNum.setCustomValidity("Card pattern is not valid, re-check your entry.");
    } else if (luhn(ccNum.value) === false ) {
        ccNum.setCustomValidity("The number you entered does not exist, enter a valid card number.");
    } else {
        ccNum.setCustomValidity("");
    }
}

// Ensure user selected a month, and year for expiration
function ccExpirationMonthValidation() {
    let month = document.getElementById("expirationMonth");
    if (month.selectedIndex === 0) {
        month.setCustomValidity("Please enter your card's expiration month.");
    } else {
        month.setCustomValidity("");
    }
}

function ccExpirationYearValidation() {
    let month = document.getElementById("expirationYear");
    if (month.selectedIndex === 0) {
        month.setCustomValidity("Please enter your card's expiration year.");
    } else {
        month.setCustomValidity("");
    }
}

//Validate the CVC of the card. Taken from lab eleven for checking if its amex or not.
function ccCVVValidation () {
    let card = document.querySelector('input[name="credit"]:checked').value;
    let cvcnum = document.getElementById("cvcnum");
    if (cvcnum.validity.valueMissing) {
        cvcnum.setCustomValidity("Please enter the CVC number on the back of your card.");
    } else if ((card === "amex") && !(/^\d{4}$/.test(cvcnum.value))) {
        cvcnum.setCustomValidity("American Express cards utilize a 4 digit CVC. Enter the number on the back of your card.");
    }  else if ((card !== "amex") && !(/^\d{3}$/.test(cvcnum.value))) {
        cvcnum.setCustomValidity("Enter the 3 digit CVC number on the back of your card.")
    } else {
        cvcnum.setCustomValidity("");
    }
}

// TAKEN FROM LAB 11. I just thought this was neat.
/* ------- Luhn Algorithm used for Validating Credit Card Numbers   ----- */

function luhn(idNum) {
    let string1 = "";
    let string2 = "";
    
    // Retrieve the odd-numbered digits starting from the back
    for (let i = idNum.length - 1; i >= 0; i-= 2) {
       string1 += idNum.charAt(i);
    }
    // Retrieve the even-numbered digits starting from the back and double them
    for (let i = idNum.length - 2; i >= 0; i-= 2) {
       string2 += 2*idNum.charAt(i);
    }
    
    // Return whether the sum of the digits is divisible by 10
    return sumDigits(string1 + string2) % 10 === 0;
    
    function sumDigits(numStr) {
       let digitTotal = 0;
       for (let i = 0; i < numStr.length; i++) {
          digitTotal += parseInt(numStr.charAt(i));
       }
       return digitTotal;
    }
 }