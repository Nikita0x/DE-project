// ==UserScript==
// @name         DE new
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://app.licacrm.co/callcenter/
// @icon         https://www.google.com/s2/favicons?sz=64&domain=licacrm.co
// @grant        none
// @run-at       document-idle
// ==/UserScript==

(function () {
  'use strict';
// Declare a global variable
let parent;
let container;
let wrapper;
setTimeout(function () {
const style = document.createElement('style')
style.type = 'text/css';
// Append the stylesheet to the head of the document
document.head.appendChild(style);
//style rules
style.innerHTML = `
.hide {
  display:none !important;
}
`
let parent;
let container;
let wrapper;

//#region container
wrapper = document.querySelector('#wrapper');
parent = document.querySelector('.menu-sidebar.sidebar');
//===========================================
// Create a container element
container = document.createElement('div');
container.classList.add('container');
container.style.position = 'relative';
container.style.left = '-17%';
container.style.height = '720px';
container.style.width = '323px';
container.style.borderRadius = '10px';
container.style.border = '1px solid black';
container.style.backgroundColor = 'yellow';
// Add the container element to the document's body
parent.appendChild(container);
parent.style.marginRight = '16px';
//===========================================
// container__header
const container__header = document.createElement('div');
container__header.classList.add('container__header');
container.appendChild(container__header);

const container__header__title = document.createElement('h1');
container__header__title.classList.add('container__header__title');
container__header.appendChild(container__header__title);
container__header__title.innerText = 'Main Menu';

const container__header__buttons = document.createElement('div');
container__header__buttons.classList.add('container__header__buttons');
container__header.appendChild(container__header__buttons);

const container__header__buttonsNewButton = document.createElement('button');
container__header__buttonsNewButton.classList.add(
  'container__header__buttons-new-button'
);
container__header__buttonsNewButton.innerText = 'Add new button';
container__header__buttons.appendChild(container__header__buttonsNewButton);

const container__header__buttonsSpam = document.createElement('button');
container__header__buttonsSpam.classList.add('container__header__buttons-spam');
container__header__buttonsSpam.innerText = 'Spam';
container__header__buttons.appendChild(container__header__buttonsSpam);

//   container header styles
container__header.style.position = 'absolute';
container__header.style.height = '158px';
container__header.style.width = '100%';
container__header.style.top = '0';
container__header.style.left = '0';
container__header.style.borderRadius = '10px 10px 0 0';
container__header.style.backgroundColor = '#2d2d2d';
container__header.style.color = '#f2f2f2';
container__header.style.border = '1px solid #6c757d';

container__header__title.style.display = 'flex';
container__header__title.style.justifyContent = 'center';
container__header__title.style.alignItems = 'center';
container__header__title.style.textAlign = 'center';
container__header__title.style.fontSize = '30px';
container__header__title.style.fontWeight = '100';

container__header__buttons.style.display = 'flex';
container__header__buttons.style.justifyContent = 'center';
container__header__buttons.style.alignItems = 'center';

container__header__buttonsNewButton.style.display = 'flex';
container__header__buttonsNewButton.style.width = '50%';
container__header__buttonsNewButton.style.height = '40px';
container__header__buttonsNewButton.style.fontSize = '15px';
container__header__buttonsNewButton.style.justifyContent = 'center';
container__header__buttonsNewButton.style.alignItems = 'center';
container__header__buttonsNewButton.style.cursor = 'pointer';

container__header__buttonsSpam.style.display = 'flex';
container__header__buttonsSpam.style.width = '50%';
container__header__buttonsSpam.style.height = '40px';
container__header__buttonsSpam.style.fontSize = '15px';
container__header__buttonsSpam.style.justifyContent = 'center';
container__header__buttonsSpam.style.alignItems = 'center';
container__header__buttonsSpam.style.cursor = 'pointer';

//input
const container__header__input = document.createElement('input')
container__header__input.classList.add('container__header__input')
container__header__input.style.position = 'absolute';
container__header__input.style.top = '58%';
container__header__input.style.left = '12%';
container__header__input.style.fontSize = '20px';
container__header__input.placeholder = 'Search'
container__header__input.style.padding = '10px';
container__header.appendChild(container__header__input)

//   container__body
const container__body = document.createElement('div');
container__body.classList.add('container__body');
container.appendChild(container__body);

//   container__body styles
container__body.style.display = 'grid';
container__body.style.gridTemplateColumns = '1fr 1fr';
container__body.style.gridTemplateRows = 'repeat(auto-fill, 60px)';
container__body.style.gap = '3px';
container__body.style.position = 'absolute';
container__body.style.top = '22%';
container__body.style.left = '0';
container__body.style.height = '500px';
container__body.style.overflowY = 'scroll';
container__body.style.width = '100%';
container__body.style.backgroundColor = '#2d2d2d';
container__body.style.border = '1px solid #6c757d';
container__body.style.paddingTop = '2px';
container__body.style.paddingBottom = '20px';
container__body.style.paddingLeft = '2px';

// container__footer
const container__footer = document.createElement('div');
container__footer.classList.add('container__footer');
container.appendChild(container__footer);

const container__footer__template = document.createElement('div');
container__footer__template.classList.add('container__footer__template');
container__footer.appendChild(container__footer__template);

const container__footer__template__title = document.createElement('h3');
container__footer__template__title.classList.add(
  'container__footer__template__title'
);
container__footer__template__title.innerHTML = 'Empty template';
container__footer__template.appendChild(container__footer__template__title);

const container__footer__template__spacer = document.createElement('div');
container__footer__template__spacer.classList.add(
  'container__footer__template__spacer'
);
container__footer__template.appendChild(container__footer__template__spacer);

const container__footer__template__edit = document.createElement('div');
container__footer__template__edit.title = 'Edit the template';
container__footer__template__edit.classList.add(
  'container__footer__template__edit'
);
container__footer__template.appendChild(container__footer__template__edit);

const container__footer__template__editModal = document.createElement('button');
container__footer__template__editModal.classList.add(
  'container__footer__template__editModal'
);
container__footer__template__editModal.style.backgroundColor = '#c3c3c3';
container__footer__template__editModal.style.cursor = 'default';
container__footer__template__editModal.style.fontSize = '16px';
container__footer__template__editModal.innerText = '⚙️';
container__footer__template__edit.appendChild(
  container__footer__template__editModal
);

// container__footer styles
container__footer.style.position = 'absolute';
container__footer.style.bottom = '0';
container__footer.style.left = '0';
container__footer.style.height = '70px';
container__footer.style.width = '100%';

container__footer__template.style.display = 'flex';
container__footer__template.style.justifyContent = 'center';
container__footer__template.style.alignItems = 'center';
container__footer__template.style.height = '70px';
container__footer__template.style.width = '100%';
container__footer__template.style.marginTop = '10px';
container__footer__template.style.backgroundColor = '#E0E0E0';
container__footer__template.style.color = 'black';
container__footer__template.style.cursor = 'pointer';
container__footer__template.style.borderRadius = '0 0 10px 10px';
container__footer__template.style.border = '1px solid #6c757d';

// hover
container__footer__template.addEventListener('mouseover', function () {
  container__footer__template.style.backgroundColor = '#D0D0D0';
});
container__footer__template.addEventListener('mouseleave', function () {
  container__footer__template.style.backgroundColor = '#E0E0E0';
});
// active
container__footer__template.addEventListener('mousedown', () => {
  container__footer__template.style.backgroundColor = '#bababa';
});
container__footer__template.addEventListener('mouseup', () => {
  container__footer__template.style.backgroundColor = '#D0D0D0';
});

container__footer__template__title.style.fontWeight = '100';

container__footer__template__spacer.style.height = '20px';
container__footer__template__spacer.style.width = '40px';

container__footer__template__edit.style.display = 'flex';
container__footer__template__edit.style.justifyContent = 'center';
container__footer__template__edit.style.alignItems = 'center';
container__footer__template__edit.style.width = '20px';
container__footer__template__edit.style.height = '20px';

//   #endregion container

// #region modal styles and shit

const modal = document.createElement('div');
modal.classList.add('modal');
wrapper.appendChild(modal);

const modal__content = document.createElement('div');
modal__content.classList.add('modal__content');
modal.appendChild(modal__content);

const modal__content__nav = document.createElement('div');
modal__content__nav.classList.add('modal__content__nav');
modal__content.appendChild(modal__content__nav);

const modal__content__navSave = document.createElement('button');
modal__content__navSave.classList.add('modal__content__nav-save');
modal__content__navSave.title = 'Сохранить шаблон';
modal__content__navSave.innerText = '✓';
modal__content__nav.appendChild(modal__content__navSave);

const modal__content__navCancel = document.createElement('button');
modal__content__navCancel.classList.add('modal__content__nav-cancel');
modal__content__navCancel.title = 'Закрыть';
modal__content__navCancel.innerText = '✘';
modal__content__nav.appendChild(modal__content__navCancel);

const modal__content__body = document.createElement('div');
modal__content__body.classList.add('modal__content__body');
modal__content.appendChild(modal__content__body);

const modal__content__bodyInstruction = document.createElement('div');
modal__content__bodyInstruction.classList.add(
  'modal__content__bodyInstruction'
);
modal__content__body.appendChild(modal__content__bodyInstruction);

const modal__content__bodyInstructionTitle = document.createElement('h1');
modal__content__bodyInstructionTitle.innerText = 'Инструкция';
modal__content__bodyInstructionTitle.style.color = 'black';
modal__content__bodyInstruction.appendChild(
  modal__content__bodyInstructionTitle
);

const modal__content__bodyInstructionOl = document.createElement('ol');
modal__content__bodyInstruction.appendChild(modal__content__bodyInstructionOl);

const modal__content__bodyInstructionItem1 = document.createElement('li');
modal__content__bodyInstructionItem1.innerText = 'Вставить шаблон';
modal__content__bodyInstructionItem1.style.color = 'black';
modal__content__bodyInstructionItem1.style.fontSize = '16px';

modal__content__bodyInstructionOl.appendChild(
  modal__content__bodyInstructionItem1
);

const modal__content__bodyInstructionItem2 = document.createElement('li');
modal__content__bodyInstructionItem2.innerHTML =
  'Заменить бренд на <b>*brand*</b>';
modal__content__bodyInstructionItem2.style.color = 'black';
modal__content__bodyInstructionItem2.style.fontSize = '16px';
modal__content__bodyInstructionOl.appendChild(
  modal__content__bodyInstructionItem2
);

const modal__content__bodyInstructionItem3 = document.createElement('li');
modal__content__bodyInstructionItem3.innerHTML = `Вставить &lt;br&gt; где нужен пробел`;
modal__content__bodyInstructionItem3.style.color = 'black';
modal__content__bodyInstructionItem3.style.fontSize = '16px';
modal__content__bodyInstructionOl.appendChild(
  modal__content__bodyInstructionItem3
);

const modal__content__bodyInstructionItem4 = document.createElement('li');
modal__content__bodyInstructionItem4.innerHTML =
  'Выбрать <abbr title="Опционально">теги</abbr>';
modal__content__bodyInstructionItem4.style.color = 'black';
modal__content__bodyInstructionItem4.style.fontSize = '16px';
modal__content__bodyInstructionOl.appendChild(
  modal__content__bodyInstructionItem4
);

const modal__content__bodyInstructionItem5 = document.createElement('li');
modal__content__bodyInstructionItem5.innerText = 'Сохранить';
modal__content__bodyInstructionItem5.style.color = 'black';
modal__content__bodyInstructionItem5.style.fontSize = '16px';
modal__content__bodyInstructionOl.appendChild(
  modal__content__bodyInstructionItem5
);

const modal__content__bodyText = document.createElement('div');
modal__content__bodyText.classList.add('modal__content__body-text');
modal__content__body.appendChild(modal__content__bodyText);

const modal__content__bodyTextTextarea = document.createElement('textarea');
modal__content__bodyTextTextarea.name = 'text';
modal__content__bodyTextTextarea.classList.add(
  'modal__content__body-text-textarea'
);
modal__content__bodyTextTextarea.style.padding = '10px';
modal__content__bodyTextTextarea.cols = '70';
modal__content__bodyTextTextarea.rows = '25';
modal__content__bodyTextTextarea.placeholder = `
  Пример:

    Hi #user_name#!
    <br>
    Thank you for contacting our *brand* Support Team!
    <br>
    <br>
    <br>
    In order to receive a prompt response, we also advise you to contact live chat on our website. Our agents work 24/7 for you every day.
    <br>
    Sincerely,
    <br>
    *brand* Support team
`;
modal__content__bodyText.appendChild(modal__content__bodyTextTextarea);

// modal styles
modal.style.position = 'absolute';
modal.style.display = 'none';
modal.style.justifyContent = 'center';
modal.style.alignItems = 'center';
modal.style.width = '100%';
modal.style.height = '100%';
modal.style.top = '0';
modal.style.left = '0';
modal.style.backgroundColor = 'rgba(0, 0, 0, 0.473)';

modal__content.style.position = 'relative';
modal__content.style.width = '80%';
modal__content.style.height = '80%';
modal__content.style.top = '0';
modal__content.style.left = '0';
modal__content.style.borderRadius = '10px';
modal__content.style.backgroundColor = '#f7c5ff';

modal__content__nav.style.display = 'flex';
modal__content__nav.style.justifyContent = 'flex-end';
modal__content__nav.style.width = '100%';
modal__content__nav.style.height = '50px';
modal__content__nav.style.backgroundColor = '#1bb35a';
modal__content__nav.style.borderRadius = '0 0 0 0';

modal__content__navSave.style.marginLeft = '10px';
modal__content__navSave.style.fontSize = '30px';
modal__content__navSave.style.fontWeight = 'lighter';
modal__content__navSave.style.width = '50px';
modal__content__navSave.style.cursor = 'pointer';
modal__content__navSave.style.backgroundColor = '#387050';
modal__content__navSave.style.color = 'aliceblue';

modal__content__navCancel.style.marginLeft = '10px';
modal__content__navCancel.style.fontSize = '30px';
modal__content__navCancel.style.fontWeight = '100';
modal__content__navCancel.style.width = '50px';
modal__content__navCancel.style.cursor = 'pointer';
modal__content__navCancel.style.backgroundColor = '#923434';
modal__content__navCancel.style.color = 'aliceblue';

modal__content__body.style.display = 'flex';
modal__content__body.style.justifyContent = 'space-evenly';
modal__content__body.style.alignItems = 'center';
modal__content__body.style.width = '100%';
modal__content__body.style.height = '90%';

// #endregion modal styles and shit

//   logic

let mainTemplate = localStorage.getItem('emptyTemplate');

//#region global variables
const addNewButton = document.querySelector(
  '.container__header__button-new-button'
);
const spam = document.querySelector('.container__header__button-new-button');
const containerBody = document.querySelector('.container__body');
const emptyTemplate = document.querySelector('.container__footer__template');
const emptyTemplateEdit = document.querySelector(
  '.container__footer__template__edit'
);

//#region Modal

// save
modal__content__navSave.addEventListener('click', (e) => {
  const text = document.querySelector(
    '.modal__content__body-text-textarea'
  ).value;
  mainTemplate = text;
  modal__content__body.style.backgroundColor = '#23AD0B';
  setTimeout(function () {
    modal__content__body.style.backgroundColor = 'rgb(208, 124, 208)';
  }, 700);
  // set to local storage
  localStorage.setItem('emptyTemplate', mainTemplate);
  console.log('local storage saved');
  console.log(mainTemplate);
});

// cancel
modal__content__navCancel.addEventListener('click', function (e) {
  modal.style.display = 'none';
});

// display the modal
emptyTemplateEdit.addEventListener('click', (e) => {
  e.stopPropagation();
  modal.style.display = 'flex';
  let modalText = document.querySelector('.modal__content__body-text-textarea');
  modalText.value = localStorage.getItem('emptyTemplate');
});

//#endregion modal

// INSERT EMPTY TEMPLATE
emptyTemplate.addEventListener('click', (e) => {
  // regexp pattern
  let brand = document.querySelector(
    '#page-wrapper > div > div > section > div > main > div.thread-details > div > div:nth-child(2) > div > div:nth-child(2) > b'
  ).nextElementSibling.innerHTML;
  // let brand = 'Google';
  let word = 'brand';
  let pattern = new RegExp('\\*' + word + '\\*', 'g');
  const openMail = document.querySelector(
    '#page-wrapper > div > div > section > div > main > div.reply > p'
  );
  openMail.click();
  async function openEditor() {
    const sourceBtn = document.getElementById('cke_39');
    sourceBtn.click();
    await delay(100);
    const textArea = document.querySelector(
      '.cke_source.cke_reset.cke_enable_context_menu.cke_editable.cke_editable_themed.cke_contents_ltr'
    );
    textArea.value = mainTemplate;
    textArea.value = textArea.value.replace(pattern, brand);
    await delay(100);
    sourceBtn.click();
    console.log('Finished!');
  }
  function delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
  openEditor();
});

//SPAM button logic
container__header__buttonsSpam.addEventListener('click', selectSpamTag);
async function selectSpamTag() {
  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  function openTags() {
    const element = document.querySelector(
      '#page-wrapper > div > div > section > div > main > div.thread-details > div > div:nth-child(3) > div > div:nth-child(1) > div > img'
    );
    const rect = element.getBoundingClientRect();
    const position = {
      x: rect.left + rect.width / 2 + window.scrollX,
      y: rect.top + rect.height / 2 + window.scrollY,
    };
    const event = new MouseEvent('click', {
      view: window,
      bubbles: true,
      cancelable: true,
      clientX: position.x,
      clientY: position.y,
    });
    element.dispatchEvent(event);
  }
  openTags();
  await delay(200);

  function openCategories() {
    const element = document.querySelector(
      '#page-wrapper > div > div > section > div > main > div.thread-details > div > div:nth-child(3) > div > div:nth-child(2) > div > div.active > div > div.el-input.el-input--suffix > span > span > i'
    );
    const rect = element.getBoundingClientRect();
    const position = {
      x: rect.left + rect.width / 2 + window.scrollX,
      y: rect.top + rect.height / 2 + window.scrollY,
    };
    const event = new MouseEvent('click', {
      view: window,
      bubbles: true,
      cancelable: true,
      clientX: position.x,
      clientY: position.y,
    });
    element.dispatchEvent(event);

    let allTags = document.querySelectorAll('.el-select-dropdown__item');

    allTags.forEach((category) => {
      if (category.innerText.includes('Входящие')) {
        category.click();
      }
    });
  }
  openCategories();
  await delay(200);

  function openTopics() {
    const element = document.querySelector(
      '#page-wrapper > div > div > section > div > main > div.thread-details > div > div:nth-child(3) > div > div:nth-child(3) > div > div.active > div > div.el-input.el-input--suffix > span > span > i'
    );
    const rect = element.getBoundingClientRect();
    const position = {
      x: rect.left + rect.width / 2 + window.scrollX,
      y: rect.top + rect.height / 2 + window.scrollY,
    };
    const event = new MouseEvent('click', {
      view: window,
      bubbles: true,
      cancelable: true,
      clientX: position.x,
      clientY: position.y,
    });
    element.dispatchEvent(event);

    let allTags = document.querySelectorAll('.el-select-dropdown__item');
    allTags.forEach((topic) => {
      if (topic.innerText.includes('Другое')) {
        topic.click();
      }
    });
    element.dispatchEvent(event);
  }
  openTopics();
  await delay(200);

  function openSubtopics() {
    const subtopics = document.querySelector(
      '#page-wrapper > div > div > section > div > main > div.thread-details > div > div:nth-child(3) > div > div:nth-child(4) > div > div.active > div > div.el-input.el-input--suffix > span > span > i'
    );
    subtopics.click();
    let allTags = document.querySelectorAll('.el-select-dropdown__item');
    allTags.forEach((topic) => {
      if (topic.innerText.includes('Спам')) {
        topic.click();
      }
    });
    subtopics.click();
  }
  openSubtopics();
  await delay(200);

  function removeTag() {
    const tagBtn = document.querySelector(
      '#page-wrapper > div > div > section > div > main > div.thread-details > div > div:nth-child(3) > div > div:nth-child(1) > div > img'
    );
    tagBtn.click();
    setTimeout(function () {
      const tag = document.querySelector(
        'body > div.el-select-dropdown.el-popper.is-multiple > div.el-scrollbar > div.el-select-dropdown__wrap.el-scrollbar__wrap > ul > li:nth-child(5)'
      );
      tag.click();
      const confirmBtn = document.querySelector(
        '#page-wrapper > div > div > section > div > main > div.thread-details > div > div:nth-child(3) > div > div:nth-child(1) > div > div > i.icon-2x.pointer.text-dark-50.value-icon.flaticon2-check-mark'
      );
      confirmBtn.click();
      console.log('removeTag inner function ended');
    }, 1000);
  }
  removeTag();
  await delay(1000);

  function openStatus() {
    const openStatus = document.querySelector(
      '#page-wrapper > div > div > section > div > main > div.thread-details > div > div:nth-child(2) > div > div:nth-child(1) > div > img'
    );
    openStatus.click();
  }
  openStatus();
  await delay(1000);

  function openStatusList() {
    let arrow = document.querySelector(
      '#page-wrapper > div > div > section > div > main > div.thread-details > div > div:nth-child(2) > div > div:nth-child(1) > div > div > div > div.el-input.el-input--suffix > span > span > i'
    );
    arrow.click();
  }
  openStatusList();
  await delay(1000);

  function selectResolvedTag() {
    let resolved = document.querySelector(
      'body > div:nth-child(8) > div.el-scrollbar > div.el-select-dropdown__wrap.el-scrollbar__wrap > ul > li:nth-child(2)'
    );
    resolved.click();
  }
  selectResolvedTag();
  await delay(1000);

  function confirmStatus() {
    let confirm = document.querySelector(
      '#page-wrapper > div > div > section > div > main > div.thread-details > div > div:nth-child(2) > div > div:nth-child(1) > div > div > i.icon-2x.pointer.text-dark-50.value-icon.flaticon2-check-mark'
    );
    confirm.click();
  }
  confirmStatus();

  console.log('tags selected');
}

//ADD NEW BUTTON logic
container__header__buttonsNewButton.addEventListener('click', (e) => {
  //container__footer__template__editModal hover
  container__footer__template__editModal.addEventListener(
    'mouseover',
    function (e) {
      container__footer__template__editModal.style.backgroundColor = '#b9b9b9';
    }
  );
  container__footer__template__editModal.addEventListener(
    'mouseleave',
    function () {
      container__footer__template__editModal.style.backgroundColor = '#c3c3c3';
    }
  );
  container__footer__template__editModal.addEventListener(
    'mousedown',
    function (e) {
      e.stopPropagation();
      container__footer__template__edit.style.backgroundColor = '#afafaf';
      if (modal.style.display == 'flex') {
        modal.style.display == 'none';
        console.log('edit modal clicked');
      }
    }
  );

  container__footer__template__editModal.addEventListener(
    'mouseup',
    function () {
      container__footer__template__editModal.style.backgroundColor = '#b9b9b9';
    }
  );
});

// =======================================================================

// buttons logic
// container for newly added buttons
const buttonsArray = JSON.parse(localStorage.getItem('buttons')) || [];

container__header__buttonsNewButton.addEventListener('click', () => {
  addingNewButton();
});

//add new buttons to container
function addingNewButton() {
  let btnObject = {
    template: ``,
    title: 'New btn',
    id: crypto.randomUUID(),
  };
  // #region create btn
  //create button
  const button = document.createElement('div');
  button.classList.add('button');
  button.id = btnObject.id;
  container__body.appendChild(button);

  const button__title = document.createElement('p');
  button__title.innerText = 'New btn';
  button__title.classList.add('button__title');
  button.appendChild(button__title);

  const button__edit = document.createElement('button');
  button__edit.innerText = '⚙️';
  button__edit.style.cursor = 'default';
  button__edit.title = 'Edit the template';
  button__edit.style.backgroundColor = '#c3c3c3';
  button__edit.classList.add('button__edit');
  button__edit.style.opacity = '0';

  button.appendChild(button__edit);
  // styles
  button.style.display = 'flex';
  button.style.alignItems = 'center';
  button.style.justifyContent = 'space-evenly';
  button.style.width = '150px';
  button.style.height = '60px';
  button.style.backgroundColor = '#f2f2f2';
  button.style.cursor = 'pointer';

  //hover button
  button.addEventListener('mouseover', function () {
    button.style.outline = '#598d54 solid 2px';
    button__edit.style.opacity = '1';
    button.style.backgroundColor = '#e8e8e8';
  });
  button.addEventListener('mouseleave', function () {
    button__edit.style.opacity = '0';
    button.style.outline = 'none';
    button.style.backgroundColor = '#f2f2f2';
  });

  button.addEventListener('mousedown', function () {
    button.style.outline = '#598d54 solid 2px';
    button.style.backgroundColor = '#c1c1c1';
  });

  button.addEventListener('mouseup', function () {
    button.style.outline = '#598d54 solid 2px';
    button.style.backgroundColor = '#e8e8e8';
  });

  //hover button__edit
  button__edit.addEventListener('mouseover', function () {
    button__edit.style.backgroundColor = '#b9b9b9';
  });
  button__edit.addEventListener('mouseleave', function () {
    button__edit.style.backgroundColor = '#c3c3c3';
  });

  button__edit.addEventListener('mousedown', function (e) {
    e.stopPropagation();
    button__edit.style.backgroundColor = '#afafaf';
  });

  button__edit.addEventListener('mouseup', function () {
    button__edit.style.backgroundColor = '#b9b9b9';
  });

  // add event listener for button__edit on click to open a modal
  const modal = document.createElement('div');
  modal.classList.add('modal');
  wrapper.appendChild(modal);

  const modal__content = document.createElement('div');
  modal__content.classList.add('modal__content');
  modal.appendChild(modal__content);

  const modal__content__nav = document.createElement('div');
  modal__content__nav.classList.add('modal__content__nav');
  modal__content.appendChild(modal__content__nav);

  const modal__content__navTitle = document.createElement('input');
  modal__content__navTitle.classList.add('modal__content__nav-title');
  modal__content__navTitle.dataset.title = btnObject.id;
  modal__content__navTitle.placeholder = 'Название';
  modal__content__navTitle.style.padding = '10px';
  modal__content__nav.appendChild(modal__content__navTitle);

  const modal__content__navSave = document.createElement('button');
  modal__content__navSave.classList.add('modal__content__nav-save');
  modal__content__navSave.title = 'Сохранить шаблон';
  modal__content__navSave.innerText = '✓';
  modal__content__nav.appendChild(modal__content__navSave);

  const modal__content__navCancel = document.createElement('button');
  modal__content__navCancel.classList.add('modal__content__nav-cancel');
  modal__content__navCancel.title = 'Закрыть';
  modal__content__navCancel.innerText = '✘';
  modal__content__nav.appendChild(modal__content__navCancel);

  const modal__content__body = document.createElement('div');
  modal__content__body.classList.add('modal__content__body');
  modal__content.appendChild(modal__content__body);

  const modal__content__bodyInstruction = document.createElement('div');
  modal__content__bodyInstruction.classList.add(
    'modal__content__bodyInstruction'
  );
  modal__content__body.appendChild(modal__content__bodyInstruction);

  const modal__content__bodyInstructionTitle = document.createElement('h1');
  modal__content__bodyInstructionTitle.innerText = 'Инструкция';
  modal__content__bodyInstructionTitle.style.color = 'black';
  modal__content__bodyInstruction.appendChild(
    modal__content__bodyInstructionTitle
  );

  const modal__content__bodyInstructionOl = document.createElement('ol');
  modal__content__bodyInstruction.appendChild(
    modal__content__bodyInstructionOl
  );

  const modal__content__bodyInstructionItem1 = document.createElement('li');
  modal__content__bodyInstructionItem1.innerText = 'Вставить шаблон';
  modal__content__bodyInstructionItem1.style.color = 'black';
  modal__content__bodyInstructionItem1.style.fontSize = '16px';

  modal__content__bodyInstructionOl.appendChild(
    modal__content__bodyInstructionItem1
  );

  const modal__content__bodyInstructionItem2 = document.createElement('li');
  modal__content__bodyInstructionItem2.innerHTML =
    'Заменить бренд на <b>*brand*</b>';
  modal__content__bodyInstructionItem2.style.color = 'black';
  modal__content__bodyInstructionItem2.style.fontSize = '16px';
  modal__content__bodyInstructionOl.appendChild(
    modal__content__bodyInstructionItem2
  );

  const modal__content__bodyInstructionItem3 = document.createElement('li');
  modal__content__bodyInstructionItem3.innerHTML = `Вставить &lt;br&gt; где нужен пробел`;
  modal__content__bodyInstructionItem3.style.color = 'black';
  modal__content__bodyInstructionItem3.style.fontSize = '16px';
  modal__content__bodyInstructionOl.appendChild(
    modal__content__bodyInstructionItem3
  );

  const modal__content__bodyInstructionItem4 = document.createElement('li');
  modal__content__bodyInstructionItem4.innerHTML =
    'Выбрать <abbr title="Опционально">теги</abbr>';
  modal__content__bodyInstructionItem4.style.color = 'black';
  modal__content__bodyInstructionItem4.style.fontSize = '16px';
  modal__content__bodyInstructionOl.appendChild(
    modal__content__bodyInstructionItem4
  );

  const modal__content__bodyInstructionItem5 = document.createElement('li');
  modal__content__bodyInstructionItem5.innerText = 'Сохранить';
  modal__content__bodyInstructionItem5.style.color = 'black';
  modal__content__bodyInstructionItem5.style.fontSize = '16px';
  modal__content__bodyInstructionOl.appendChild(
    modal__content__bodyInstructionItem5
  );

  const modal__content__bodyText = document.createElement('div');
  modal__content__bodyText.classList.add('modal__content__body-text');
  modal__content__body.appendChild(modal__content__bodyText);

  const modal__content__bodyTextTextarea = document.createElement('textarea');
  modal__content__bodyTextTextarea.name = 'text';
  modal__content__bodyTextTextarea.classList.add(
    'modal__content__body-text-textarea'
  );
  modal__content__bodyTextTextarea.dataset.id = btnObject.id;
  modal__content__bodyTextTextarea.style.padding = '10px';
  modal__content__bodyTextTextarea.cols = '70';
  modal__content__bodyTextTextarea.rows = '25';
  modal__content__bodyTextTextarea.placeholder = `
  Пример:

    Hi #user_name#!
    <br>
    Thank you for contacting our *brand* Support Team!
    <br>
    <br>
    <br>
    In order to receive a prompt response, we also advise you to contact live chat on our website. Our agents work 24/7 for you every day.
    <br>
    Sincerely,
    <br>
    *brand* Support team
  `;
  modal__content__bodyText.appendChild(modal__content__bodyTextTextarea);

  // modal styles
  modal.style.position = 'absolute';
  modal.style.display = 'none';
  modal.style.justifyContent = 'center';
  modal.style.alignItems = 'center';
  modal.style.width = '100%';
  modal.style.height = '100%';
  modal.style.top = '0';
  modal.style.left = '0';
  modal.style.backgroundColor = 'rgba(0, 0, 0, 0.473)';

  modal__content.style.position = 'relative';
  modal__content.style.width = '80%';
  modal__content.style.height = '80%';
  modal__content.style.top = '0';
  modal__content.style.left = '0';
  modal__content.style.borderRadius = '10px';
  modal__content.style.backgroundColor = '#f7c5ff';

  modal__content__nav.style.display = 'flex';
  modal__content__nav.style.justifyContent = 'flex-end';
  modal__content__nav.style.width = '100%';
  modal__content__nav.style.height = '50px';
  modal__content__nav.style.backgroundColor = '#1bb35a';
  modal__content__nav.style.borderRadius = '0 0 0 0';

  modal__content__navSave.style.marginLeft = '10px';
  modal__content__navSave.style.fontSize = '30px';
  modal__content__navSave.style.fontWeight = 'lighter';
  modal__content__navSave.style.width = '50px';
  modal__content__navSave.style.cursor = 'pointer';
  modal__content__navSave.style.backgroundColor = '#387050';
  modal__content__navSave.style.color = 'aliceblue';

  modal__content__navCancel.style.marginLeft = '10px';
  modal__content__navCancel.style.fontSize = '30px';
  modal__content__navCancel.style.fontWeight = '100';
  modal__content__navCancel.style.width = '50px';
  modal__content__navCancel.style.cursor = 'pointer';
  modal__content__navCancel.style.backgroundColor = '#923434';
  modal__content__navCancel.style.color = 'aliceblue';

  modal__content__body.style.display = 'flex';
  modal__content__body.style.justifyContent = 'space-evenly';
  modal__content__body.style.alignItems = 'center';
  modal__content__body.style.width = '100%';
  modal__content__body.style.height = '90%';
  //#endregion

  // buttons logic
  // save
  modal__content__navSave.addEventListener('click', (e) => {
    let text = document.querySelector(`[data-id="${btnObject.id}"]`);
    let input = document.querySelector(`[data-title="${btnObject.id}"]`);
    console.log(input);
    buttonsArray.forEach((button) => {
      if (button.id === btnObject.id) {
        button.template = text.value;
      }
      if (button.id === btnObject.id) {
        button.title = input.value;
        button__title.innerText = input.value;
      }
    });
    localStorage.setItem('buttons', JSON.stringify(buttonsArray));
    //   #region animation
    modal__content__body.style.backgroundColor = '#23AD0B';
    setTimeout(function () {
      modal__content__body.style.backgroundColor = 'rgb(208, 124, 208)';
    }, 700);
    //   #endregion
  });

  // cancel
  modal__content__navCancel.addEventListener('click', function (e) {
    modal.style.display = 'none';
  });

  // display the modal
  button__edit.addEventListener('click', (e) => {
    e.stopPropagation();
    modal.style.display = 'flex';
  });

  // INSERT EMPTY TEMPLATE
  button.addEventListener('click', (e) => {
    // regexp pattern
    let brand = document.querySelector(
      '#page-wrapper > div > div > section > div > main > div.thread-details > div > div:nth-child(2) > div > div:nth-child(2) > b'
    ).nextElementSibling.innerHTML;
    // let brand = 'Google';
    let word = 'brand';
    let pattern = new RegExp('\\*' + word + '\\*', 'g');
    const openMail = document.querySelector(
      '#page-wrapper > div > div > section > div > main > div.reply > p'
    );
    openMail.click();
    async function openEditor() {
      const sourceBtn = document.getElementById('cke_39');
      sourceBtn.click();
      await delay(100);
      const textArea = document.querySelector(
        '.cke_source.cke_reset.cke_enable_context_menu.cke_editable.cke_editable_themed.cke_contents_ltr'
      );
      let buttonTemplate = JSON.parse(localStorage.getItem('buttons'));
      buttonTemplate.forEach((button) => {
        if (button.id === btnObject.id) {
          textArea.value = button.template;
        }
      });
      textArea.value = textArea.value.replace(pattern, brand);
      await delay(100);
      sourceBtn.click();
      console.log('Finished!');
    }
    function delay(ms) {
      return new Promise((resolve) => setTimeout(resolve, ms));
    }
    openEditor();
  });

  buttonsArray.push(btnObject);

  //save a new button to local storage
  localStorage.setItem('buttons', JSON.stringify(buttonsArray));
}

// render buttons
function renderButtons() {
  let buttonsArrayParsed = JSON.parse(localStorage.getItem('buttons'));
  buttonsArrayParsed.forEach((element) => {
    //#region create button
    //create button
    const button = document.createElement('div');
    button.classList.add('button');
    button.title = element.title;
    button.id = element.id;
    containerBody.appendChild(button);

    const button__title = document.createElement('p');
    button__title.innerText = element.title;
    button__title.classList.add('button__title');
    button.appendChild(button__title);

    const button__edit = document.createElement('button');
    button__edit.innerText = '⚙️';
    button__edit.style.cursor = 'default';
    button__edit.title = 'Edit the template';
    button__edit.style.backgroundColor = '#c3c3c3';
    button__edit.classList.add('button__edit');
    button__edit.style.opacity = '0';

    button.appendChild(button__edit);
    // styles
    button.style.display = 'flex';
    button.style.alignItems = 'center';
    button.style.justifyContent = 'space-evenly';
    button.style.width = '150px';
    button.style.height = '60px';
    button.style.backgroundColor = '#f2f2f2';
    button.style.cursor = 'pointer';

    //hover button
    button.addEventListener('mouseover', function () {
      button.style.outline = '#598d54 solid 2px';
      button__edit.style.opacity = '1';
      button.style.backgroundColor = '#e8e8e8';
    });
    button.addEventListener('mouseleave', function () {
      button__edit.style.opacity = '0';
      button.style.outline = 'none';
      button.style.backgroundColor = '#f2f2f2';
    });

    button.addEventListener('mousedown', function () {
      button.style.outline = '#598d54 solid 2px';
      button.style.backgroundColor = '#c1c1c1';
    });

    button.addEventListener('mouseup', function () {
      button.style.outline = '#598d54 solid 2px';
      button.style.backgroundColor = '#e8e8e8';
    });

    //hover button__edit
    button__edit.addEventListener('mouseover', function () {
      button__edit.style.backgroundColor = '#b9b9b9';
    });
    button__edit.addEventListener('mouseleave', function () {
      button__edit.style.backgroundColor = '#c3c3c3';
    });

    button__edit.addEventListener('mousedown', function (e) {
      e.stopPropagation();
      button__edit.style.backgroundColor = '#afafaf';
    });

    button__edit.addEventListener('mouseup', function () {
      button__edit.style.backgroundColor = '#b9b9b9';
    });

    // add event listener for button__edit on click to open a modal
    const modal = document.createElement('div');
    modal.classList.add('modal');
    wrapper.appendChild(modal);

    const modal__content = document.createElement('div');
    modal__content.classList.add('modal__content');
    modal.appendChild(modal__content);

    const modal__content__nav = document.createElement('div');
    modal__content__nav.classList.add('modal__content__nav');
    modal__content.appendChild(modal__content__nav);

    const modal__content__navTitle = document.createElement('input');
    modal__content__navTitle.classList.add('modal__content__nav-title');
    modal__content__navTitle.dataset.title = element.id;
    modal__content__navTitle.placeholder = 'Название';
    modal__content__navTitle.style.padding = '10px';
    modal__content__nav.appendChild(modal__content__navTitle);

    const modal__content__navSave = document.createElement('button');
    modal__content__navSave.classList.add('modal__content__nav-save');
    modal__content__navSave.title = 'Сохранить шаблон';
    modal__content__navSave.innerText = '✓';
    modal__content__nav.appendChild(modal__content__navSave);

    const modal__content__navCancel = document.createElement('button');
    modal__content__navCancel.classList.add('modal__content__nav-cancel');
    modal__content__navCancel.title = 'Закрыть';
    modal__content__navCancel.innerText = '✘';
    modal__content__nav.appendChild(modal__content__navCancel);

    const modal__content__body = document.createElement('div');
    modal__content__body.classList.add('modal__content__body');
    modal__content.appendChild(modal__content__body);

    const modal__content__bodyInstruction = document.createElement('div');
    modal__content__bodyInstruction.classList.add(
      'modal__content__bodyInstruction'
    );
    modal__content__body.appendChild(modal__content__bodyInstruction);

    const modal__content__bodyInstructionTitle = document.createElement('h1');
    modal__content__bodyInstructionTitle.innerText = 'Инструкция';
    modal__content__bodyInstructionTitle.style.color = 'black';
    modal__content__bodyInstruction.appendChild(
      modal__content__bodyInstructionTitle
    );

    const modal__content__bodyInstructionOl = document.createElement('ol');
    modal__content__bodyInstruction.appendChild(
      modal__content__bodyInstructionOl
    );

    const modal__content__bodyInstructionItem1 = document.createElement('li');
    modal__content__bodyInstructionItem1.innerText = 'Вставить шаблон';
    modal__content__bodyInstructionItem1.style.color = 'black';
    modal__content__bodyInstructionItem1.style.fontSize = '16px';

    modal__content__bodyInstructionOl.appendChild(
      modal__content__bodyInstructionItem1
    );

    const modal__content__bodyInstructionItem2 = document.createElement('li');
    modal__content__bodyInstructionItem2.innerHTML =
      'Заменить бренд на <b>*brand*</b>';
    modal__content__bodyInstructionItem2.style.color = 'black';
    modal__content__bodyInstructionItem2.style.fontSize = '16px';
    modal__content__bodyInstructionOl.appendChild(
      modal__content__bodyInstructionItem2
    );

    const modal__content__bodyInstructionItem3 = document.createElement('li');
    modal__content__bodyInstructionItem3.innerHTML = `Вставить &lt;br&gt; где нужен пробел`;
    modal__content__bodyInstructionItem3.style.color = 'black';
    modal__content__bodyInstructionItem3.style.fontSize = '16px';
    modal__content__bodyInstructionOl.appendChild(
      modal__content__bodyInstructionItem3
    );

    const modal__content__bodyInstructionItem4 = document.createElement('li');
    modal__content__bodyInstructionItem4.innerHTML =
      'Выбрать <abbr title="Опционально">теги</abbr>';
    modal__content__bodyInstructionItem4.style.color = 'black';
    modal__content__bodyInstructionItem4.style.fontSize = '16px';
    modal__content__bodyInstructionOl.appendChild(
      modal__content__bodyInstructionItem4
    );

    const modal__content__bodyInstructionItem5 = document.createElement('li');
    modal__content__bodyInstructionItem5.innerText = 'Сохранить';
    modal__content__bodyInstructionItem5.style.color = 'black';
    modal__content__bodyInstructionItem5.style.fontSize = '16px';
    modal__content__bodyInstructionOl.appendChild(
      modal__content__bodyInstructionItem5
    );

    const modal__content__bodyText = document.createElement('div');
    modal__content__bodyText.classList.add('modal__content__body-text');
    modal__content__body.appendChild(modal__content__bodyText);

    let modal__content__bodyTextTextarea = document.createElement('textarea');
    modal__content__bodyTextTextarea.name = 'text';
    modal__content__bodyTextTextarea.dataset.id = element.id;
    modal__content__bodyTextTextarea.innerHTML = element.template;
    modal__content__bodyTextTextarea.classList.add(
      'modal__content__body-text-textarea'
    );
    modal__content__bodyTextTextarea.style.padding = '10px';
    modal__content__bodyTextTextarea.cols = '70';
    modal__content__bodyTextTextarea.rows = '25';
    modal__content__bodyTextTextarea.placeholder = `
  Пример:

    Hi #user_name#!
    <br>
    Thank you for contacting our *brand* Support Team!
    <br>
    <br>
    <br>
    In order to receive a prompt response, we also advise you to contact live chat on our website. Our agents work 24/7 for you every day.
    <br>
    Sincerely,
    <br>
    *brand* Support team
`;
    modal__content__bodyText.appendChild(modal__content__bodyTextTextarea);

    // modal styles
    modal.style.position = 'absolute';
    modal.style.display = 'none';
    modal.style.justifyContent = 'center';
    modal.style.alignItems = 'center';
    modal.style.width = '100%';
    modal.style.height = '100%';
    modal.style.top = '0';
    modal.style.left = '0';
    modal.style.backgroundColor = 'rgba(0, 0, 0, 0.473)';

    modal__content.style.position = 'relative';
    modal__content.style.width = '80%';
    modal__content.style.height = '80%';
    modal__content.style.top = '0';
    modal__content.style.left = '0';
    modal__content.style.borderRadius = '10px';
    modal__content.style.backgroundColor = '#f7c5ff';

    modal__content__nav.style.display = 'flex';
    modal__content__nav.style.justifyContent = 'flex-end';
    modal__content__nav.style.width = '100%';
    modal__content__nav.style.height = '50px';
    modal__content__nav.style.backgroundColor = '#1bb35a';
    modal__content__nav.style.borderRadius = '0 0 0 0';

    modal__content__navSave.style.marginLeft = '10px';
    modal__content__navSave.style.fontSize = '30px';
    modal__content__navSave.style.fontWeight = 'lighter';
    modal__content__navSave.style.width = '50px';
    modal__content__navSave.style.cursor = 'pointer';
    modal__content__navSave.style.backgroundColor = '#387050';
    modal__content__navSave.style.color = 'aliceblue';

    modal__content__navCancel.style.marginLeft = '10px';
    modal__content__navCancel.style.fontSize = '30px';
    modal__content__navCancel.style.fontWeight = '100';
    modal__content__navCancel.style.width = '50px';
    modal__content__navCancel.style.cursor = 'pointer';
    modal__content__navCancel.style.backgroundColor = '#923434';
    modal__content__navCancel.style.color = 'aliceblue';

    modal__content__body.style.display = 'flex';
    modal__content__body.style.justifyContent = 'space-evenly';
    modal__content__body.style.alignItems = 'center';
    modal__content__body.style.width = '100%';
    modal__content__body.style.height = '90%';
    //#endregion create button

    // buttons logic
    // save
    modal__content__navSave.addEventListener('click', (e) => {
      let text = document.querySelector(`[data-id="${element.id}"]`);
      let input = document.querySelector(`[data-title="${element.id}"]`);
      console.log(input);
      buttonsArray.forEach((button) => {
        if (button.id === element.id) {
          button.template = text.value;
        }
        if (button.id === element.id) {
          button.title = input.value;
          button__title.innerText = input.value;
        }
      });
      localStorage.setItem('buttons', JSON.stringify(buttonsArray));
      //   #region animation
      modal__content__body.style.backgroundColor = '#23AD0B';
      setTimeout(function () {
        modal__content__body.style.backgroundColor = 'rgb(208, 124, 208)';
      }, 700);
      //   #endregion
    });

    // cancel
    modal__content__navCancel.addEventListener('click', function (e) {
      modal.style.display = 'none';
    });

    // display the modal + render localStorage Template
    button__edit.addEventListener('click', (e) => {
      e.stopPropagation();
      modal.style.display = 'flex';
    });
    // INSERT EMPTY TEMPLATE
    button.addEventListener('click', (e) => {
      // regexp pattern
      let brand = document.querySelector(
        '#page-wrapper > div > div > section > div > main > div.thread-details > div > div:nth-child(2) > div > div:nth-child(2) > b'
      ).nextElementSibling.innerHTML;
      // let brand = 'Google';
      let word = 'brand';
      let pattern = new RegExp('\\*' + word + '\\*', 'g');
      const openMail = document.querySelector(
        '#page-wrapper > div > div > section > div > main > div.reply > p'
      );
      openMail.click();
      async function openEditor() {
        const sourceBtn = document.getElementById('cke_39');
        sourceBtn.click();
        await delay(100);
        const textArea = document.querySelector(
          '.cke_source.cke_reset.cke_enable_context_menu.cke_editable.cke_editable_themed.cke_contents_ltr'
        );
        let buttonTemplate = JSON.parse(localStorage.getItem('buttons'));
        buttonTemplate.forEach((button) => {
          if (button.id === element.id) {
            textArea.value = button.template;
          }
        });
        textArea.value = textArea.value.replace(pattern, brand);
        await delay(100);
        sourceBtn.click();
        console.log('Finished!');
      }
      function delay(ms) {
        return new Promise((resolve) => setTimeout(resolve, ms));
      }
      openEditor();
    });
  });
}
renderButtons();

    // search logic

container__header__input.addEventListener('keyup', (e) => {
  let val = container__header__input.value.trim().toLowerCase();
  const buttonsList = document.querySelectorAll('.button');
  if (val != '') {
    buttonsList.forEach((button) => {
      let title = button.title.toLowerCase();
      if (title.search(val) == -1) {
        button.classList.add('hide');
      } else {
        button.classList.remove('hide');
        console.log(button);
      }
    });
  } else {
    buttonsList.forEach((button) => {
      button.classList.remove('hide');
    });
  }
});

}, 2000);


})();
