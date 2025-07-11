const container = document.querySelector('.container'); //access the conatiner class
const age = document.getElementById('age');
const username = document.getElementById('full_name');
const role = document.getElementById('user_role');
const button = document.getElementById('addPersonBtn'); //access the addperbtn id 
const message = document.getElementById('errorMsg');

container.addEventListener('click', function (e) {
    if (e.target.classList.contains('remove-btn')) {
        const card = e.target.closest('.card');
        if (card) card.remove();
    }
})

button.addEventListener('click', function (e) {
    e.preventDefault();
    const user_name = username.value;
    const personAge = age.value;
    const personRole = role.value;

    // Check if username already exists 

    const allcards = document.querySelectorAll('.card h1');
    let exists = false;

    allcards.forEach(cardHeading => {
        if (cardHeading.textContent.toLowerCase() === user_name.toLowerCase()) {
            exists = true;
        }
    })

    if (exists) {
        errorMsg.textContent = 'UserName already exists';
        return;
    } else {
        errorMsg.textContent = '';
    }

    const card = document.createElement('div');
    card.classList.add('card');

    const nameHeading = document.createElement('h1');
    nameHeading.textContent = user_name;

    const agePara = document.createElement('p');
    agePara.textContent = personAge;

    const rolePara = document.createElement('p');
    rolePara.textContent = personRole;


    const removeBtn = document.createElement('button');
    removeBtn.classList.add('remove-btn');
    removeBtn.textContent = 'Remove User';



    card.appendChild(nameHeading);
    card.appendChild(agePara);
    card.appendChild(rolePara);
    card.appendChild(removeBtn);
    container.appendChild(card);
})