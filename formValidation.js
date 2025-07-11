const nameInput = document.getElementById('full_name');
const ageInput = document.getElementById('age');
const roleInput = document.getElementById('user_role');

const nameValidation = document.getElementById('nameError');
const agevalidation = document.getElementById('ageError');
const roleValidation = document.getElementById('roleError');
const button = document.getElementById('addPersonBtn');

window.formIsValid = false;

button.addEventListener('click', function (e) {
    e.preventDefault();

    let isValid = true;

    //Name validation
    if (nameInput.value.trim() === '') {
        nameValidation.textContent = "Name is required";
        isValid = false;
    } else {
        nameValidation.textContent = '';
    }

    //age Validation
    if (ageInput.value.trim() === '' || Number(ageInput.value) <= 0) {
        agevalidation.textContent = 'Enter a valid number';
        isValid = false;
    } else {
        agevalidation.textContent = '';
    }

    //role validation
    if (roleInput.value.trim() === '') {
        roleValidation.textContent = "Role is a required field";
        isValid = false;
    } else {
        roleValidation.textContent = '';
    }

    if (isValid) {
        console.log('All inputs are valid, proceeding with logic form')
    }

    window.formIsValid = isValid;

})

