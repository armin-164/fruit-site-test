(function () {
  fetch('./data/fruits.json')
    .then((response) => response.json())
    .then((data) => {
      displayAllFruits(data.fruits);
    })
    .catch((error) => console.error('Error message:', error));
})();

function displayAllFruits(arr) {
  const mainContent = document.querySelector('.main-content');
  mainContent.innerHTML = "";

  const fruitListContainer = document.createElement('div');
  fruitListContainer.classList.add('fruit-list');

  arr.forEach((fruit) => {
    const fruitCard = document.createElement('div');
    fruitCard.classList.add('fruit-card');

    fruitCard.innerHTML = `
    <h2 class="fruit-name">${fruit.name}</h2>
    <img src="${fruit.imageSrc}" alt="${fruit.altDesc}">
    <button>Read more</button>
    `;

    fruitListContainer.appendChild(fruitCard);
  });

  mainContent.appendChild(fruitListContainer);
}

function displaySpecificFruit(fruit) {
  const mainContent = document.querySelector('.main-content');
  mainContent.innerHTML = '';

  const fruitContainer = document.createElement('div');
  fruitContainer.classList.add('fruit-container');

  fruitContainer.innerHTML = `
    <div class="image-container">
            <img src="${fruit.imageSrc}" alt="${fruit.altDesc}">
        </div>
        <div class="fruit-info">
            <div class="info-top>
                <h2 class="fruit-name">${fruit.name}</h2>
                <button>Go Back</button>
            </div>
            <div class="info-bottom>
                <p class="fruit-description">${fruit.description}</p>
            </div>
        </div>
    `;

    mainContent.appendChild(fruitContainer);
}
