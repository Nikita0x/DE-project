// create footer
footer = document.createElement('div');
container.appendChild(footer);
footer.classList.add('footer');

//styles
footer.style.display = 'flex';
footer.style.justifyContent = 'center';
footer.style.alignItems = 'center';
footer.style.fontSize = '20px';
footer.style.position = 'absolute';
footer.style.bottom = '0';
footer.style.width = '100%';
footer.style.height = '70px';
footer.style.borderRadius = '0px 0px 10px 10px';
footer.style.backgroundColor = 'blue';
footer.style.cursor = 'pointer';

// footer.style.border = '5px solid green'; //untoggle when needed

//footer-container
const footerContainer = document.createElement('div');
footerContainer.classList.add('footer-container');
footer.appendChild(footerContainer);

//styles
footerContainer.style.display = 'flex';
footerContainer.style.width = '100%';
footerContainer.style.justifyContent = 'center';
footerContainer.style.alignItems = 'center';

// title
const footerTitle = document.createElement('p');
footerTitle.innerText = 'Empty Template';
footerContainer.appendChild(footerTitle);

//button
const footerEdit = document.createElement('button');
footerContainer.appendChild(footerEdit);
footerEdit.innerText = 'Edit';
