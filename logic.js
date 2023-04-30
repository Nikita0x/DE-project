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
  };
  storedButtons.push(newButtonData);
  localStorage.setItem('buttons', JSON.stringify(storedButtons));

  //Add event listener to the new button
  newButton.addEventListener('click', (e) => {
    console.log(e.target.dataset.id);
  });
});

function addEventListenerOnAllButtons() {
  // put addEventListeners on all buttons

  const buttons = document.querySelectorAll('.button');
  buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
      console.log(e.target.dataset.id);
    });
  });
}
addEventListenerOnAllButtons();
