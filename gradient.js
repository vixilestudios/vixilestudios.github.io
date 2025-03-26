function hsvToRgb(h, s, v) {
  let f = (n, k = (n + h / 60) % 6) =>
    v - v * s * Math.max(Math.min(k, 4 - k, 1), 0);
  return [f(5)*255, f(3)*255, f(1)*255];
}

document.addEventListener("DOMContentLoaded", () => {
  const section = document.querySelector(".section");

  let cursorX = 0;
  let cursorY = 0;
  let gradientX = 0;
  let borderGradientX = 0;
  let currentY = 0;
  const easeFactor = 10;

  let isBeingHovered = false;
  section.addEventListener("mouseenter", () => {isBeingHovered = true;});
  section.addEventListener("mouseleave", () => {isBeingHovered = false;});

  document.addEventListener("mousemove", (e) => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    cursorX = (mouseX / windowWidth) * 100;
    cursorY = (mouseY / windowHeight) * 100;
  });

  let blendFactor = 0;

  let lastTime = performance.now(); // Time tracking for delta time
  function animate() {
    let time = performance.now();
    const deltaTime = (time - lastTime) / 1000; // time in seconds
    lastTime = time;

    //const blendSpeed = 0.1; // time in seconds
    //blendFactor += 1/blendSpeed * (isBeingHovered ? 1 : -1) * deltaTime;
    blendFactor += ((isBeingHovered?1:0) - blendFactor) * easeFactor * deltaTime;
    blendFactor = Math.min(Math.max(blendFactor, 0), 1); // clamp between 0 and 1
    blendFactor = Math.round(blendFactor * 1000) / 1000; // round to 3 decimal places

    gradientX += (cursorX - gradientX) * easeFactor * deltaTime;
    borderGradientX += (cursorX - borderGradientX) * easeFactor/3 * deltaTime;
    currentY = cursorY /*(cursorY - currentY) * easeFactor*/;

    const colorNormal = hsvToRgb(0, 0, 0.07);
    const colorHovered = hsvToRgb(0, 0, 0.15);

    let brightnessHovered = colorHovered[0]
    let brightnessNormal = colorNormal[0];

    let brightness = Math.round(brightnessNormal + (brightnessHovered - brightnessNormal) * blendFactor);

    section.style.background = `linear-gradient(90deg, 
    rgb(${brightnessNormal}, ${brightnessNormal}, ${brightnessNormal}) 0%, 
    rgb(${brightness}, ${brightness}, ${brightness}) ${gradientX}%,
    rgb(${brightnessNormal}, ${brightnessNormal}, ${brightnessNormal}) 100%)`;

    section.style.setProperty(
      '--border-gradient', 
      `linear-gradient(90deg,
      rgb(${brightnessNormal*2}, ${brightnessNormal*2}, ${brightnessNormal*2}) 0%, 
      rgb(${brightness*2}, ${brightness*2}, ${brightness*2}) ${borderGradientX}%,
      rgb(${brightnessNormal*2}, ${brightnessNormal*2}, ${brightnessNormal*2}) 100%)`
    );

    requestAnimationFrame(animate);
  }

  animate();
});
