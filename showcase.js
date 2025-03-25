const images = ["/assets/images/image1.webp", "/assets/images/image2.webp", "/assets/images/image3.webp"];
const texts = [
  {
    explanation: "What is VIXILE?",
    explanationText: "VIXILE is an independent game dev team established in October of 2021. We pride ourselves on staying true to our core vision.",
  },
  {
    explanation: "What do we do?",
    explanationText: "We love to take our time and build fun video-games, applications, services and software. With ambitious projects ahead and a focus on a resonating brand, we enjoy the road along the way."
  },
  {
    explanation: "What's cool about us?",
    explanationText: "We're dedicated to being unique in the game development industry. Our focus is on creating software that offers players memorable experiences.",
  }
];
let index = 0;
let timerInterval;

function changeContent(currentIndex) {
  const { explanation, explanationText } = texts[currentIndex];
  document.querySelector('.explanation h1').textContent = explanation;
  document.querySelector('.explanation .h').textContent = explanationText;
  document.querySelector('.showcase img').src = images[currentIndex];

  document.querySelectorAll('.bottom-bars .bottom-bar, .bottom-bars .selected-bar').forEach((bar, i) => {
    if (i === currentIndex) {
      bar.classList.add('selected-bar');
      bar.classList.remove('bottom-bar');
    } else {
      bar.classList.add('bottom-bar');
      bar.classList.remove('selected-bar');
    }
  });
  adjustDivHeights();
  toggleContentLayout();
}

function resetTimer() {
  clearInterval(timerInterval);
  startTimer(index);
}

function startTimer(startIndex) {
  timerInterval = setInterval(() => {
    index = (index + 1) % texts.length;
    changeContent(index);
  }, 8000);
}

document.addEventListener('DOMContentLoaded', function() {
  adjustDivHeights();
  toggleContentLayout();
  const clickableElements = document.querySelectorAll('.bottom-bar');
  changeContent(0);
  clickableElements.forEach(element => {
    element.addEventListener('click', function(event) {
      const selectedIndex = parseInt(event.target.getAttribute('data-index'));
      index = selectedIndex;
      changeContent(selectedIndex);
      resetTimer();
    });
  });
});

startTimer(index);