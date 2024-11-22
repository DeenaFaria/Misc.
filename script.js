const carouselContainer = document.querySelector('.carousel__container');
const leftButton = document.querySelector('.control.left');
const rightButton = document.querySelector('.control.right');

let angle = 0; // Starting angle
const step = 72; // Rotate by 72 degrees for each step (5 items = 360/5 = 72)

// Rotate the carousel
function rotateCarousel(direction) {
  angle += direction === 'left' ? step : -step;
  carouselContainer.style.transform = `rotateY(${angle}deg)`;
}

// Add event listeners for keyboard controls
document.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowLeft') {
    rotateCarousel('left');
  } else if (event.key === 'ArrowRight') {
    rotateCarousel('right');
  }
});


// Add event listeners
leftButton.addEventListener('click', () => rotateCarousel('left'));
rightButton.addEventListener('click', () => rotateCarousel('right'));
