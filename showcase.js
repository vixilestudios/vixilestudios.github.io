const images = ["/assets/images/image1.jpg", "/assets/images/image2.jpg", "/assets/images/image3.jpg"];
const texts = [
  {
    explanation: "What is VIXILE?",
    explanationText: "VIXILE is a non-profit independent game development team established in October 2021.",
  },
  {
    explanation: "What do we bring?",
    explanationText: "We as a team of individuals take pride in creating interactive video games for everyone to enjoy!"
  },
  {
    explanation: "Why choose us?",
    explanationText: "We strive to create engaging experiences for anyone out there, with lots of passion and love.",
  }
];
let index = 0;

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
}

document.addEventListener('DOMContentLoaded', function() {
  const clickableElements = document.querySelectorAll('.bottom-bar');
  changeContent(0);
  clickableElements.forEach(element => {
      element.addEventListener('click', function() {
        const selectedIndex = parseInt(event.target.getAttribute('data-index'));
        changeContent(selectedIndex);
      });
  });
});

document.querySelectorAll('.bottom-bars .bottom-bar, .bottom-bars .selected-bar').forEach(bar => {
  bar.addEventListener('click', handleBarClick);
});

setInterval(() => {
  index = (index + 1) % texts.length;
  changeContent(index);
}, 8000);