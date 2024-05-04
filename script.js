const images = ["/assets/images/image1.png", "/assets/images/image2.png", "/assets/images/image3.png"];
const texts = [
  {
    explanation: "What is VIXILE?",
    explanationText: "VIXILE is an independent game development team established in October of 2021.",
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
  const { explanation, showcase, explanationText, showcaseText } = texts[index % texts.length];
  document.querySelector('.explanation h1').textContent = explanation;
  document.querySelector('.explanation .h').textContent = explanationText;
  document.querySelector('.showcase img').src = images[index % images.length];
  index++;
}

setInterval(changeContent, 5000);