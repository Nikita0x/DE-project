const newLanguageBtn = document.getElementById('newLanguage');
const newCategoryBtn = document.getElementById('newCategory');
const newTemplateBtn = document.getElementById('newTemplate');

const languages = [];
const categories = [];
const templates = [];
let selectedLanguage = '';
let categoryBtnIdGlobal = '';

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
  button.innerText = 'new language';
  button.id = Date.now().toString();
  button.classList.add('btn-language');
  mainMenuContainer.appendChild(button);
  languages.push(button);
  button.addEventListener('click', (e) => {
    const buttonId = e.currentTarget.id;
    selectedLanguage = buttonId;
    console.log(`Button ID: ${buttonId}`);
    console.log(`Selected Language: ${selectedLanguage}`);
    showCategoriesForLanguage(selectedLanguage);
  });
});

// logic to clear all buttons in Category menu and render those which exist and have a parent of a selectedLanguage button
function showCategoriesForLanguage(languageId) {
  categoriesCard.style.display = 'block';
  categoriesContainer.innerHTML = `Selected Language ID: ${languageId}`;
}
//-------------------------------------------
// add new category btn
newCategoryBtn.addEventListener('click', () => {
  categoryBtnIdGlobal = Date.now().toString();
  addCategoryBtn(selectedLanguage, categoryBtnIdGlobal);
});
function addCategoryBtn(selectedLanguage, categoryBtnId) {
  // create and append a button
  const button = document.createElement('button');
  button.innerText = 'new category';
  button.id = categoryBtnId;
  button.classList.add('btn-category');
  categoriesContainer.appendChild(button);
  console.log(`CategoryBtn ID: ${categoryBtnId}`);
  categories.push({ selectedLanguage, categoryBtnIdGlobal });
  button.addEventListener('click', (e) => {
    // When the category button is clicked, show the templates for that category
    categoryBtnIdGlobal = e.target.id;
    showTemplatesForCategory(categoryBtnId);
  });
}
function showTemplatesForCategory(categoryBtnId) {
  templatesCard.style.display = 'block';
  templatesContainer.innerHTML = `Selected Category's ID: ${categoryBtnId}`;
}
//-------------------------------------------

//back button
const backToMainMenuBtn = document.getElementById('backToMainMenu');
backToMainMenuBtn.addEventListener('click', () => {
  selectedLanguage = '';
  categoriesCard.style.display = 'none';
});
//back button
const backToCategoryBtn = document.getElementById('backToCategory');
backToCategoryBtn.addEventListener('click', () => {
  categoryBtnIdGlobal = '';
  templatesCard.style.display = 'none';
});

// templates

newTemplateBtn.addEventListener('click', () => {});
