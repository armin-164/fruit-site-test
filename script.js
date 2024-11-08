// This IIFE will fetch the fruits and display all of them immediately
(function () {
  fetch('./data/fruits.json')
    .then((response) => response.json())
    .then((data) => displayAllFruits(data.fruits))
    .catch((error) => console.error('Error message:', error));
})();

// A function that creates an element with a class
function createElementWithClass(type, className) {
  const element = document.createElement(type);
  if (className) element.classList.add(className);
  return element;
}

// This function aims to display all fruits in main content
function displayAllFruits(fruits) {
  const mainContent = document.querySelector('.main-content');
  mainContent.innerHTML = "";

  const fruitListContainer = createElementWithClass('div', 'fruit-list');

  fruits.forEach(fruit => {
    const fruitCard = createElementWithClass('div', 'fruit-card');
    const fruitCardTop = createElementWithClass('div', 'fruit-card-top');
    const fruitName = createElementWithClass('h3', 'fruit-name');
    fruitName.textContent = fruit.name;

    const readMoreBtn = createElementWithClass('button', 'read-more-btn');
    readMoreBtn.textContent = 'Read more';
    readMoreBtn.addEventListener('click', () => displaySpecificFruit(fruit));

    fruitCardTop.append(fruitName, readMoreBtn);

    const fruitImage = createElementWithClass('img');
    fruitImage.src = fruit.imageSrc;
    fruitImage.alt = fruit.altDesc;

    fruitCard.append(fruitCardTop, fruitImage);
    fruitListContainer.appendChild(fruitCard);
  });

  mainContent.appendChild(fruitListContainer);
}


// This function will display a specific fruit and make use of the fruits obj
// that is passed along as an arg
function displaySpecificFruit(fruit) {
  const mainContent = document.querySelector('.main-content');
  mainContent.innerHTML = '';

  const fruitContainer = createElementWithClass('div', 'fruit-container');
  const imageContainer = createElementWithClass('div', 'image-container');
  const img = createElementWithClass('img');
  img.src = fruit.imageSrc;
  img.alt = fruit.altDesc;
  imageContainer.appendChild(img);

  const fruitInfo = createElementWithClass('div', 'fruit-info');
  const infoTop = createElementWithClass('div', 'info-top');
  const fruitName = createElementWithClass('h3', 'fruit-name');
  fruitName.textContent = fruit.name;

  const goBackLink = createElementWithClass('a');
  goBackLink.href = '/';
  goBackLink.textContent = 'Go Back';

  infoTop.append(fruitName, goBackLink);

  const infoBottom = createElementWithClass('div', 'info-bottom');
  const fruitDescription = createElementWithClass('p', 'fruit-description');
  fruitDescription.textContent = fruit.description;

  infoBottom.append(fruitDescription);
  fruitInfo.append(infoTop, infoBottom);

  fruitContainer.append(imageContainer, fruitInfo);
  mainContent.appendChild(fruitContainer);
}
