function homePage() {

    const content = document.querySelector('.dynamic');

    const mainContainer = document.createElement('div');
    const mainTitle = document.createElement('h1');
    const mainContent = document.createElement('p');

    mainTitle.innerText = 'Electrifying taste';
    mainContent.innerText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ut consectetur quam. Sed aliquam';

    mainTitle.classList.add('head1');
    mainContent.classList.add('head-p');
    
    mainContainer.appendChild(mainTitle);
    mainContainer.appendChild(mainContent);

    content.innerText = '';

    content.appendChild(mainContainer);
}

export default homePage;