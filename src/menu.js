
let modalMenu = () => {

    const content = document.querySelector('.dynamic');
    const courses = ['Breakfast', 'Lunch', 'Dinner'];
    const foodItems = [
    'Eggs and bacon', 
    'Pancakes', 
    'Croissants',
    'Morning special',
    'Beef burger',
    'Chicken and lamb wrap',
    'Shanghai chicken',
    'Plate shawarma',
    'Chef\'s special'
];

    const menuContainer = document.createElement('containerMenu');
    const menuTitle = document.createElement('h2');
    const row = document.createElement('div');
    const col = document.createElement('div');
    const list = document.createElement('ul');

    
    
   for(let i=0; i<3; i++){

    const foodOfTheDay = foodItems[Math.floor(Math.random() * foodItems.length)];

    const link = document.createElement('li');
       link.innerText = foodOfTheDay;
       list.appendChild(link);

       const col = document.createElement('div');
       col.classList.add('column');
       col.classList.add('head-p');
       col.innerText = courses[i];

       col.appendChild(list.cloneNode(true));

       row.appendChild(col);
   }

    menuTitle.innerText = 'MENU';
    menuTitle.classList.add('bottomBorder');
    menuTitle.classList.add('head1');
    

    menuContainer.appendChild(menuTitle);
    menuContainer.appendChild(row);
    
    
    content.textContent = '';
    content.appendChild(menuContainer);

}

export default modalMenu;