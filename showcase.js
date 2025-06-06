const carouselImagePath = "/assets/images/carousel"
const carouselImages = [carouselImagePath + "/image2.webp", carouselImagePath + "/placeholder.webp", carouselImagePath + "/image3.webp"];
const texts = [
  {
    explanation: "What is VIXILE?",
    explanationText: "VIXILE is an independent game dev team established in October of 2021. We pride ourselves on staying true to our core vision.",
  },
  {
    explanation: "What do we do?",
    explanationText: "We love to build fun video-games, applications, services and software. With ambitious projects ahead and a focus on a resonating brand, we enjoy the road along the way."
  },
  {
    explanation: "What's cool about us?",
    explanationText: "We're dedicated to being unique in the game development industry. Our focus is on creating games and apps that offer users fun and unforgettable experiences.",
  }
];
let index = 0;
let timerInterval;

function changeContent(currentIndex) {
  const { explanation, explanationText } = texts[currentIndex];
  document.querySelector('.explanation h1').textContent = explanation;
  document.querySelector('.explanation .h').textContent = explanationText;
  document.querySelector('.showcase img').src = carouselImages[currentIndex];

  document.querySelectorAll('.kos-bottom-bars .kos-bottom-bar, .kos-bottom-bars .selected-bar').forEach((bar, i) => {
    if (i === currentIndex) {
      bar.classList.add('selected-bar');
      bar.classList.remove('kos-bottom-bar');
    } else {
      bar.classList.add('kos-bottom-bar');
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
  const clickableElements = document.querySelectorAll('.kos-bottom-bar');
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