const container = document.querySelector('.container_delegate');

container.addEventListener('click', function (e) {

    console.log(`Clicked Element:`, e.target);

    const card = e.target.closest('.card_delegate');

    //safety:make sure click came from inside a card
    if (!card || !container.contains(card)) return;

    const nameEl = card.querySelector('p');

    //safety:make sure there's a <p> tag inside the card
    if (!nameEl) return;

    console.log(`you clicked on:`, nameEl.textContent);

    //feedback

    card.style.backgroundColor = '#d1e7dd';

    setTimeout(() => {
        card.style.backgroundColor = '';// reset
    }, 500)

})