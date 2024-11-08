(function () {
  fetch('./data/fruits.json')
    .then((response) => response.json())
    .then((data) => {
      displayAllFruits(data.fruits);
    })
    .catch((error) => console.error('Error message:', error));
})();
