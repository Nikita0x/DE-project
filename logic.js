// Button (Add new language) -  logic

// Retrieve existing buttons from localStorage (if any)
const storedButtons = JSON.parse(localStorage.getItem('buttons')) || [];

// Render existing buttons
storedButtons.forEach((buttonData) => {
  const button = document.createElement('div');
  button.textContent = buttonData.text;
  button.setAttribute('data-id', buttonData.id);
  button.classList.add('button');
  button.style.display = 'flex';
  button.style.border = '1px solid black';
  button.style.height = '80px';
  button.style.width = '48%';
  button.style.justifyContent = 'center';
  button.style.alignItems = 'center';
  button.style.backgroundColor = 'azure';
  button.style.cursor = 'pointer';
  mainMenu.appendChild(button);
});

// Handle "Add new button" button click
btnAddNewLanguage.addEventListener('click', (e) => {
  //create new button
  const newButton = document.createElement('div');
  newButton.classList.add('button');
  newButton.textContent = 'New Button';

  //styles
  const display = (newButton.style.display = 'flex');
  const border = (newButton.style.border = '1px solid black');
  const height = (newButton.style.height = '80px');
  const width = (newButton.style.width = '48%');
  const justifyContent = (newButton.style.justifyContent = 'center');
  const alignItems = (newButton.style.alignItems = 'center');
  const backgroundColor = (newButton.style.backgroundColor = 'azure');
  const cursor = (newButton.style.cursor = 'pointer');

  // generate unique ID for the button
  const newId = Date.now().toString();

  //add id attribute to the button
  newButton.setAttribute('data-id', newId);

  //add the button to the container
  mainMenu.appendChild(newButton);
  // store the new button in localStorage
  const newButtonData = {
    id: newId,
    text: 'New button',
    display: display,
    border: border,
    height: height,
    width: width,
    justifyContent: justifyContent,
    alignItems: alignItems,
    backgroundColor: backgroundColor,
    cursor: cursor,
    category: [],
  };
  storedButtons.push(newButtonData);
  localStorage.setItem('buttons', JSON.stringify(storedButtons));

  //Add event listener to the new button
  newButton.addEventListener('click', (e) => {
    const clickedButton = e.target.dataset.id;
    console.log(clickedButton);
    modalCategory.style.display = 'flex'; //none by default
  });
});

function addEventListenerOnAllButtons() {
  // put addEventListeners on all buttons

  const buttons = document.querySelectorAll('.button');
  buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
      const clickedButton = e.target.dataset.id;
      console.log(clickedButton);
      modalCategory.style.display = 'flex'; //none by default
    });
  });
}
addEventListenerOnAllButtons();

//----------------------------------------------------------
// MODAL CATEGORIES
//----------------------------------------------------------

const modalCategory = document.createElement('div');
container.appendChild(modalCategory);
modalCategory.classList.add('modalCategory');
modalCategory.style.display = 'none'; //none by default
modalCategory.style.position = 'absolute';
modalCategory.style.top = '0';
modalCategory.style.left = '0';
modalCategory.style.width = '100%';
modalCategory.style.height = '100%';
modalCategory.style.backgroundColor = 'blue';
modalCategory.style.zIndex = '1';
//style

//create a categories NAVBAR
categoriesNavbar = document.createElement('div');
modalCategory.appendChild(categoriesNavbar);
categoriesNavbar.classList.add('categoriesNavbar');

// styles
categoriesNavbar.style.display = 'flex';
categoriesNavbar.style.flexDirection = 'column';
categoriesNavbar.style.alignItems = 'center';

categoriesNavbar.style.position = 'absolute';
categoriesNavbar.style.width = '100%';
categoriesNavbar.style.height = '110px';
// categoriesNavbar.style.borderRadius = '10px 10px 0px 0px';
categoriesNavbar.style.backgroundColor = 'red';

// categories title
const categoriesTitle = document.createElement('h2');
categoriesNavbar.appendChild(categoriesTitle);
categoriesTitle.innerText = 'Category menu';
categoriesTitle.style.marginTop = '10px';
categoriesTitle.style.marginBottom = '10px';

//categories navbar container
const categoriesNavbarContainer = document.createElement('div');
categoriesNavbar.appendChild(categoriesNavbarContainer);
categoriesNavbarContainer.classList.add('categoriesNavbarContainer');

//styles
categoriesNavbarContainer.style.display = 'flex';
categoriesNavbarContainer.style.width = '100%';
categoriesNavbarContainer.style.justifyContent = 'center';

//categories navbar buttons
const btnBackCategories = document.createElement('button');
btnBackCategories.innerText = '<< Back';
categoriesNavbarContainer.appendChild(btnBackCategories);
//styles
btnBackCategories.style.height = '50px';
btnBackCategories.style.width = '40%';

const btnAddNewCategory = document.createElement('button');
btnAddNewCategory.innerText = 'Add new Category';
categoriesNavbarContainer.appendChild(btnAddNewCategory);
//styles
btnAddNewCategory.style.height = '50px';
btnAddNewCategory.style.width = '100%';

// const btnSpamCategories = document.createElement('button');
// btnSpamCategories.innerText = 'Spam';
// categoriesNavbarContainer.appendChild(btnSpamCategories);
// //styles
// btnSpamCategories.style.height = '50px';
// btnSpamCategories.style.width = '100%';

// create categories MAIN MENU
mainMenuCategories = document.createElement('div');
modalCategory.appendChild(mainMenuCategories);
mainMenuCategories.classList.add('main-menu-categories');

//styles
mainMenuCategories.style.display = 'flex';
mainMenuCategories.style.position = 'relative';
mainMenuCategories.style.top = '110px';
mainMenuCategories.style.width = '100%';
mainMenuCategories.style.height = '320px';
mainMenuCategories.style.flexWrap = 'wrap';
mainMenuCategories.style.overflowY = 'scroll';
mainMenuCategories.style.justifyContent = 'center';
mainMenuCategories.style.alignItems = 'flex-start';
// mainMenu.style.border = '5px solid red'; //untoggle when needed

// create categories FOOTER
footerCategories = document.createElement('div');
modalCategory.appendChild(footerCategories);
footerCategories.classList.add('footerCategories');

//styles
footerCategories.style.display = 'flex';
footerCategories.style.justifyContent = 'center';
footerCategories.style.alignItems = 'center';
footerCategories.style.fontSize = '20px';
footerCategories.style.position = 'absolute';
footerCategories.style.bottom = '0';
footerCategories.style.width = '100%';
footerCategories.style.height = '70px';
footerCategories.style.borderRadius = '0px 0px 10px 10px';
footerCategories.style.backgroundColor = 'green';
footerCategories.style.cursor = 'pointer';

//footer-container categories
const footerContainerCategories = document.createElement('div');
footerContainerCategories.classList.add('footer-container-categories');
footerCategories.appendChild(footerContainerCategories);

//styles
footerContainerCategories.style.display = 'flex';
footerContainerCategories.style.width = '100%';
footerContainerCategories.style.justifyContent = 'center';
footerContainerCategories.style.alignItems = 'center';

// title
const footerTitleCategories = document.createElement('p');
footerTitleCategories.innerText = 'Empty Template';
footerContainerCategories.appendChild(footerTitleCategories);

//button
const footerEditCategories = document.createElement('button');
footerContainerCategories.appendChild(footerEditCategories);
footerEditCategories.innerText = 'Edit';

//categories MODAL LOGIC

// back button
btnBackCategories.addEventListener('click', () => {
  modalCategory.style.display = 'none';
});

// add new category button - logic
// Retrieve existing buttons from localStorage (if any)
const storedButtonsCategories =
  JSON.parse(localStorage.getItem('buttonsCategories')) || [];

// Render existing buttons
storedButtonsCategories.forEach((buttonCategoriesData) => {
  const button = document.createElement('div');
  button.textContent = buttonCategoriesData.text;
  button.setAttribute('data-id', buttonCategoriesData.id);
  button.classList.add('buttonCategory');
  button.style.display = 'flex';
  button.style.border = '1px solid black';
  button.style.height = '80px';
  button.style.width = '48%';
  button.style.justifyContent = 'center';
  button.style.alignItems = 'center';
  button.style.backgroundColor = 'brown';
  button.style.cursor = 'pointer';
  mainMenuCategories.appendChild(button);
});

// Handle "Add new category" button click
btnAddNewCategory.addEventListener('click', (e) => {
  //create new button
  const newButton = document.createElement('div');
  newButton.classList.add('buttonCategory');
  newButton.textContent = 'New Category';

  //styles
  const display = (newButton.style.display = 'flex');
  const border = (newButton.style.border = '1px solid black');
  const height = (newButton.style.height = '80px');
  const width = (newButton.style.width = '48%');
  const justifyContent = (newButton.style.justifyContent = 'center');
  const alignItems = (newButton.style.alignItems = 'center');
  const backgroundColor = (newButton.style.backgroundColor = 'brown');
  const cursor = (newButton.style.cursor = 'pointer');

  // generate unique ID for the button
  const newId = Date.now().toString();

  //add id attribute to the button
  newButton.setAttribute('data-id', newId);

  //add the button to the container
  mainMenuCategories.appendChild(newButton);
  // store the new button in localStorage
  const newButtonData = {
    id: newId,
    text: 'New Category',
    display: display,
    border: border,
    height: height,
    width: width,
    justifyContent: justifyContent,
    alignItems: alignItems,
    backgroundColor: backgroundColor,
    cursor: cursor,
  };
  storedButtonsCategories.push(newButtonData);
  localStorage.setItem(
    'buttonsCategories',
    JSON.stringify(storedButtonsCategories)
  );

  //Add event listener to the new button
  newButton.addEventListener('click', (e) => {
    console.log(e.target.dataset.id);
  });
});

function addEventListenerOnAllButtonsCategories() {
  // put addEventListeners on all buttons in categories modal

  const buttons = document.querySelectorAll('.buttonCategory');
  buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
      console.log(e.target.dataset.id);
    });
  });
}
addEventListenerOnAllButtonsCategories();
