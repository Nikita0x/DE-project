//create a nav bar
navbar = document.createElement('div');
container.appendChild(navbar);
navbar.classList.add('navbar');

// styles
navbar.style.display = 'flex';
navbar.style.flexDirection = 'column';
navbar.style.alignItems = 'center';

navbar.style.position = 'absolute';
navbar.style.width = '100%';
navbar.style.height = '110px';
navbar.style.borderRadius = '10px 10px 0px 0px';
navbar.style.backgroundColor = 'red';
// navbar.style.border = '5px solid black'; //untoggle when needed

//title
const navTitle = document.createElement('h2');
navbar.appendChild(navTitle);
navTitle.innerText = 'Main menu';
navTitle.style.marginTop = '10px';
navTitle.style.marginBottom = '10px';

//navbar container
const navbarContainer = document.createElement('div');
navbar.appendChild(navbarContainer);
navbarContainer.classList.add('navbarContainer');

//styles
navbarContainer.style.display = 'flex';
navbarContainer.style.width = '100%';
navbarContainer.style.justifyContent = 'center';

//navbar buttons
const btnAddNewLanguage = document.createElement('button');
btnAddNewLanguage.innerText = 'Add new language';
navbarContainer.appendChild(btnAddNewLanguage);
//styles
btnAddNewLanguage.style.height = '50px';
btnAddNewLanguage.style.width = '60%';

const btnSpam = document.createElement('button');
btnSpam.innerText = 'Spam';
navbarContainer.appendChild(btnSpam);
//styles
btnSpam.style.height = '50px';
btnSpam.style.width = '40%';
