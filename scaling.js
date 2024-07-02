const MIN_HEIGHT = 400;
const MIN_LAYOUT = 1000;

window.addEventListener('DOMContentLoaded', () => {
  adjustDivHeights();
  toggleContentLayout();
});

window.addEventListener('resize', () => {
  adjustDivHeights();
  toggleContentLayout();
});


function adjustDivHeights() {
  const explanationDiv = document.getElementById('explanation');
  const showcaseDiv = document.querySelector('.showcase');

  explanationDiv.style.height = 'auto';
  showcaseDiv.style.height = 'auto';

  const explanationHeight = explanationDiv.offsetHeight;
  const showcaseHeight = showcaseDiv.offsetHeight;

  if (explanationHeight < MIN_HEIGHT) {
    explanationDiv.style.height = `${MIN_HEIGHT}px`;
    showcaseDiv.style.height = `${MIN_HEIGHT}px`;
  } else {
    const maxHeight = Math.max(explanationHeight, showcaseHeight);
    explanationDiv.style.height = `${maxHeight}px`;
    showcaseDiv.style.height = `${maxHeight}px`;
  }
}

function toggleContentLayout() {
  const viewportWidth = window.innerWidth;
  const contentDiv = document.querySelector('.content');

  if (viewportWidth < MIN_LAYOUT) {
    contentDiv.classList.add('grid-content');
  } else {
    contentDiv.classList.remove('grid-content');
  }
}
