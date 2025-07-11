const container = document.querySelector('.container_delegate');

container.addEventListener('click', function (e) {

    console.log(`Clicked Element:`, e.target);

    const card = e.target.closest('.card_delegate');
    if (!card || !container.contains(card)) return;

    const nameEl = card.querySelector('p');
    if (!nameEl) return;

    console.log(`you clicked on:`, nameEl.textContent);

    document.querySelectorAll('.card_delegate').forEach(c => c.classList.remove('selected'));

    card.classList.add('selected')


}) 