const images = ["/assets/images/image1.png", "/assets/images/image2.png", "/assets/images/image3.png"];
const texts = [
  {
    explanation: "What is VIXILE?",
    explanationText: "VIXILE is an independent game development team established in October 2021.",
  },
  {
    explanation: "What do we bring?",
    explanationText: "We as a team of individuals take pride in creating interactive video games for everyone to enjoy!"
  },
  {
    explanation: "Why choose us?",
    explanationText: "We believe in quality video games, and strive to create engaging experiences for everyone, with lots of passion and love.",
  }
];
let index = 0;

function changeContent() {
  const currentIndex = index % texts.length;

  const prevIndicatorBar = document.querySelector('.selected-bar');
  if (prevIndicatorBar) {
    prevIndicatorBar.classList.remove('selected-bar');
    prevIndicatorBar.classList.add('bottom-bar');
  }

  const { explanation, explanationText } = texts[currentIndex];
  document.querySelector('.explanation h1').textContent = explanation;
  document.querySelector('.explanation .h').textContent = explanationText;
  document.querySelector('.showcase img').src = images[currentIndex];

  const indicatorBars = document.querySelectorAll('.bottom-bars .bottom-bar');
  indicatorBars[currentIndex].classList.remove('bottom-bar');
  indicatorBars[currentIndex].classList.add('selected-bar');

  index++;
}

setInterval(changeContent, 8000);
