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
