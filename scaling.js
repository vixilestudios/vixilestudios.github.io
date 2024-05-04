const MIN_EXPLANATION_HEIGHT = 100;

window.addEventListener('DOMContentLoaded', (event) => {
  adjustDivHeights();
});

window.addEventListener('resize', () => {
  adjustDivHeights();
});

function adjustDivHeights() {
  const explanationDiv = document.getElementById('explanation');
  const showcaseDiv = document.querySelector('.showcase');

  explanationDiv.style.height = 'auto';
  showcaseDiv.style.height = 'auto';

  const explanationHeight = explanationDiv.offsetHeight;
  const showcaseHeight = showcaseDiv.offsetHeight;

  if (explanationHeight < MIN_EXPLANATION_HEIGHT) {
    explanationDiv.style.height = `${MIN_EXPLANATION_HEIGHT}px`;
    showcaseDiv.style.height = `${MIN_EXPLANATION_HEIGHT}px`;
  } else {
    const maxHeight = Math.max(explanationHeight, showcaseHeight);
    explanationDiv.style.height = `${maxHeight}px`;
    showcaseDiv.style.height = `${maxHeight}px`;
  }
}
