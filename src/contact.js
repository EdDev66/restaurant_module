function contactPage() {
    const content = document.querySelector('.dynamic');

    content.textContent = '';

    const card = document.createElement('div');
    const img = document.createElement('img');
    const title = document.createElement('h1');
    const phone = document.createElement('p');
    const email = document.createElement('p');
    const address = document.createElement('p');

    img.src = '../img/contact-card.png';

    content.innerText = '';
    title.innerText = 'Shockului';
    phone.innerText = 'Phone: 415.555.2530';
    email.innerText = 'Email: default@email.com';
    address.innerText = 'Address: 1523 Market St Suite 100';

    card.classList.add('card');
    img.classList.add('card-img');

    card.appendChild(img);
    card.appendChild(title);
    card.appendChild(phone);
    card.appendChild(email);
    card.appendChild(address);
    content.appendChild(card);

}

export default contactPage;