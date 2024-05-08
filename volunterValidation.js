let submit = document.getElementById("submit");

subscribe.addEventListener("click", firstNameValidation);
subscribe.addEventListener("click", lastNameValidation);

// If there isn't a first and last name in the fields, display a custom validation error
// If First Name field (id firstName) is empty, display custom valid message
function firstNameValidation () {
    let firstName = document.getElementById("firstName");
    if (firstName.validity.valueMissing) {
        firstName.setCustomValidity("Enter your first name.");
    } else {
        firstName.setCustomValidity("");
    }
}

function lastNameValidation () {
    let lastName = document.getElementById("lastName");
    if (lastName.validity.valueMissing) {
        lastName.setCustomValidity("Enter your last name.");
    } else {
        lastName.setCustomValidity("");
    }
}