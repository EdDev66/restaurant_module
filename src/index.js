import modalMenu from './menu';
import contactPage from './contact';
import homePage from './home';

const content = document.getElementById('content');
const dynamic = document.querySelector('.dynamic');

const contact = document.getElementById('contact-btn');
const menu = document.getElementById('menu-btn');
const home = document.getElementById('home-btn');

window.addEventListener('load', function(){
    content.appendChild(homePage());
})


menu.addEventListener('click', function(){
    content.appendChild(modalMenu());
})

contact.addEventListener('click', function() {
    content.appendChild(contactPage());
})


home.addEventListener('click', function() {
    content.appendChild(homePage());
})