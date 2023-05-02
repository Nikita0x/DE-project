const newLanguageBtn = document.getElementById('newLanguage');
const newCategoryBtn = document.getElementById('newCategory');
const newTemplateBtn = document.getElementById('newTemplate');

// const languages = [];

let selectedLanguage = '';
let categoryBtnIdGlobal = '';
let selectedTemplateId = '';
let selectedCategory = '';

// containers
const mainMenuContainer = document.querySelector('.main-menu-container');
const categoriesCard = document.querySelector('.categories');
const categoriesContainer = document.querySelector('.categories-container');
const templatesCard = document.querySelector('.templates');
const templatesContainer = document.querySelector('.templates-container');

// add new language

newLanguageBtn.addEventListener('click', () => {
  // create and append a button
  const button = document.createElement('button');
  button.innerText = 'new btn';
  button.id = Date.now().toString();
  button.classList.add('btn-language');
  mainMenuContainer.appendChild(button);

  //local storage logic
  let languagesParsed = JSON.parse(localStorage.getItem('languagesJSON')) || [];
  const newBtn = {
    id: button.id,
    name: 'new btn',
  };
  languagesParsed.push(newBtn);
  localStorage.setItem('languagesJSON', JSON.stringify(languagesParsed));
  //--------------
  button.addEventListener('click', (e) => {
    const buttonId = e.currentTarget.id;
    selectedLanguage = buttonId;
    showCategoriesForLanguage(selectedLanguage);
  });
});

// logic to clear all buttons in Category menu and render those which exist and have a parent of a selectedLanguage button and addEventListeners to them
function showCategoriesForLanguage(languageId) {
  categoriesCard.style.display = 'block';
  categoriesContainer.innerHTML = '';

  //local storage logic
  let categoriesLoaded =
    JSON.parse(localStorage.getItem('categoriesJSON')) || [];
  console.log(categoriesLoaded);
  categoriesLoaded.forEach((item) => {
    if (item.selectedLanguage === selectedLanguage) {
      const button = document.createElement('button');
      categoriesContainer.appendChild(button);
      button.innerText = 'new btn';
      button.id = item.id;
      button.classList.add('btn-category');
    } else {
      return;
    }
  });
  showTemplatesForCategory(categoryBtnIdGlobal);
}

// render languages from localStorage on load
function renderLanguages() {
  let languagesLoaded = JSON.parse(localStorage.getItem('languagesJSON')) || [];
  console.log(languagesLoaded);
  languagesLoaded.forEach((item) => {
    const button = document.createElement('button');
    mainMenuContainer.appendChild(button);
    button.innerText = item.name;
    button.id = item.id;
    button.classList.add('btn-language');
    button.addEventListener('click', (e) => {
      const buttonId = e.currentTarget.id;
      selectedLanguage = buttonId;
      console.log(selectedLanguage);
      showCategoriesForLanguage(selectedLanguage);
    });
  });
}
renderLanguages();

//-------------------------------------------
// add new category btn
newCategoryBtn.addEventListener('click', () => {
  categoryBtnIdGlobal = Date.now().toString();
  addCategoryBtn(selectedLanguage, categoryBtnIdGlobal);
});
function addCategoryBtn(selectedLanguage, categoryBtnId) {
  // create and append a button
  const button = document.createElement('button');
  button.innerText = 'new btn';
  button.id = categoryBtnId;
  button.classList.add('btn-category');
  categoriesContainer.appendChild(button);

  //local storage logic
  let categoriesParsed =
    JSON.parse(localStorage.getItem('categoriesJSON')) || [];
  const newBtn = {
    id: button.id,
    name: 'new btn',
    selectedLanguage: selectedLanguage,
  };
  categoriesParsed.push(newBtn);
  localStorage.setItem('categoriesJSON', JSON.stringify(categoriesParsed));
  console.log('function to add new category worked');
  button.addEventListener('click', (e) => {
    selectedCategory = e.target.id;
    templatesCard.style.display = 'block';
    console.log(`Selected Category ID: ${selectedCategory}`);
  });
}
function showTemplatesForCategory(categoryBtnIdGlobal) {
  const buttons = document.querySelectorAll('.btn-category');
  buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
      selectedCategory = e.target.id;
      console.log(selectedCategory);
      renderTemplates(selectedCategory);
    });
  });
}

// logic to clear all buttons in templates menu and render those which exist and have a parent of a selectedCategory button and addEventListeners to them
function renderTemplates(selectedCategory) {
  templatesCard.style.display = 'block';
  templatesContainer.innerHTML = '';

  //local storage logic
  let templatesLoaded = JSON.parse(localStorage.getItem('templatesJSON')) || [];
  templatesLoaded.forEach((item) => {
    if (item.selectedCategory === selectedCategory) {
      const button = document.createElement('button');
      templatesContainer.appendChild(button);
      button.innerText = 'new template';
      button.id = item.id;
      button.classList.add('btn-template');

      button.addEventListener('click', (e) => {
        console.log(`template ID: ${e.target.id}`);
        console.log(`selected category: ${selectedCategory}`);
      });
    } else {
      return;
    }
  });
}

//-------------------------------------------
// templates
//add new template
newTemplateBtn.addEventListener('click', () => {
  selectedTemplateId = Date.now().toString();
  addTemplateBtn(categoryBtnIdGlobal, selectedTemplateId);
});
function addTemplateBtn(categoryBtnIdGlobal, selectedTemplateId) {
  // create and append a button
  const button = document.createElement('button');
  button.innerText = 'new template';
  button.id = selectedTemplateId;
  button.classList.add('btn-template');
  templatesContainer.appendChild(button);

  //local storage logic
  let templatesParsed = JSON.parse(localStorage.getItem('templatesJSON')) || [];
  const newBtn = {
    id: button.id,
    name: 'new btn',
    selectedCategory: selectedCategory,
  };
  templatesParsed.push(newBtn);
  localStorage.setItem('templatesJSON', JSON.stringify(templatesParsed));
  console.log('function to add new template worked');
  button.addEventListener('click', (e) => {
    console.log(`template ID: ${e.target.id}`);
    console.log(`selected category: ${newBtn.selectedCategory}`);
  });
}

//back button
const backToMainMenuBtn = document.getElementById('backToMainMenu');
backToMainMenuBtn.addEventListener('click', () => {
  selectedCategory = '';
  selectedLanguage = '';
  categoriesCard.style.display = 'none';
});
//back button
const backToCategoryBtn = document.getElementById('backToCategory');
backToCategoryBtn.addEventListener('click', () => {
  categoryBtnIdGlobal = '';
  selectedCategory = '';

  templatesCard.style.display = 'none';
});
