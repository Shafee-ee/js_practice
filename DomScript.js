const nameInput = document.getElementById('full_name');
const ageInput = document.getElementById('age');
const roleInput = document.getElementById('user_role');

const nameValidation = document.getElementById('nameError');
const ageValidation = document.getElementById('ageError');
const roleValidation = document.getElementById('roleError');

const addBtn = document.getElementById('addPersonBtn');
const container = document.querySelector('.container');
const errorMsg = document.getElementById('errorMsg');

// 👉 Create or remove cards
container.addEventListener('click', function (e) {
    const card = e.target.closest('.card');
    if (!card) return;

    if (e.target.classList.contains('remove-btn')) {
        card.remove();
    }

    if (e.target.classList.contains('edit-btn')) {
        const name = card.querySelector('h1').textContent;
        const ageText = card.querySelectorAll('p')[0].textContent;
        const roleText = card.querySelectorAll('p')[1].textContent;

        nameInput.value = name;
        ageInput.value = ageText;
        roleInput.value = roleText;
        card.remove();
    }
});

// 👉 Create card on button click with validation
addBtn.addEventListener('click', function (e) {
    e.preventDefault();

    // === VALIDATION ===
    let isValid = true;

    if (nameInput.value.trim() === '') {
        nameValidation.textContent = "Name is required";
        isValid = false;
    } else {
        nameValidation.textContent = '';
    }

    if (ageInput.value.trim() === '' || Number(ageInput.value) <= 0) {
        ageValidation.textContent = 'Enter a valid number';
        isValid = false;
    } else {
        ageValidation.textContent = '';
    }

    if (roleInput.value.trim() === '') {
        roleValidation.textContent = "Role is a required field";
        isValid = false;
    } else {
        roleValidation.textContent = '';
    }

    if (!isValid) return;

    // === DUPLICATE CHECK ===
    const allCards = document.querySelectorAll('.card h1');
    for (let cardHeading of allCards) {
        if (cardHeading.textContent.toLowerCase() === nameInput.value.toLowerCase()) {
            errorMsg.textContent = 'UserName already exists';
            return;
        }
    }

    errorMsg.textContent = '';

    // === CARD CREATION ===
    const card = document.createElement('div');
    card.classList.add('card');

    const nameHeading = document.createElement('h1');
    nameHeading.textContent = nameInput.value;

    const agePara = document.createElement('p');
    agePara.textContent = ageInput.value;

    const rolePara = document.createElement('p');
    rolePara.textContent = roleInput.value;

    const removeBtn = document.createElement('button');
    removeBtn.classList.add('remove-btn');
    removeBtn.textContent = 'Remove User';

    const editBtn = document.createElement('button');
    editBtn.classList.add('edit-btn');
    editBtn.textContent = 'Edit';

    card.appendChild(nameHeading);
    card.appendChild(agePara);
    card.appendChild(rolePara);
    card.appendChild(removeBtn);
    card.appendChild(editBtn);
    container.appendChild(card);

    // Clear inputs
    nameInput.value = '';
    ageInput.value = '';
    roleInput.value = '';
});
