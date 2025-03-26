function hsvToRgb(h, s, v) {
  let f = (n, k = (n + h / 60) % 6) =>
    v - v * s * Math.max(Math.min(k, 4 - k, 1), 0);
  return [f(5)*255, f(3)*255, f(1)*255];
}

document.addEventListener("DOMContentLoaded", () => {
  const section = document.querySelector(".section");

  let targetX = 0;
  let targetY = 0;
  let currentX = 0;
  let currentY = 0;
  const easeFactor = 0.1;

  let isBeingHovered = false;
  section.addEventListener("mouseenter", () => {isBeingHovered = true;});
  section.addEventListener("mouseleave", () => {isBeingHovered = false;});

  document.addEventListener("mousemove", (e) => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    targetX = (mouseX / windowWidth) * 100;
    targetY = (mouseY / windowHeight) * 100;
  });

  currentX += (targetX - currentX) * easeFactor;
  currentY += (targetY - currentY) * easeFactor;
  let lastTime = performance.now(); // Time tracking for delta time

  function animate() {
    let time = performance.now();
    const deltaTime = (time - lastTime) / 1000; // Time in seconds
    lastTime = time;
    
    //console.log("Hovered: " + (isBeingHovered ? "Yes" : "No"))

    const blendSpeed = 0.05; // higher value = faster transition
    blendFactor += blendSpeed * (isBeingHovered ? 1 : -1) * deltaTime;
    blendFactor = Math.min(Math.max(blendFactor, 0), 1); // Clamp between 0 and 1

    const colorNormal = hsvToRgb(0, 0, 0.07);
    const colorHovered = hsvToRgb(0, 0, 0.15);

    let r = Math.round(baseColor[0] + (hoverColor[0] - baseColor[0]) * blendFactor * 20);
    let g = Math.round(baseColor[1] + (hoverColor[1] - baseColor[1]) * blendFactor * 20);
    let b = Math.round(baseColor[2] + (hoverColor[2] - baseColor[2]) * blendFactor * 20);

    // test/fix this:
    // section.style.background = `linear-gradient(90deg, 
    // rgb(20, 20, 20) 0%, 
    // rgb(${r}, ${g}, ${b}) ${currentX}%,
    // rgb(20, 20, 20) 100%)`;

    if (isBeingHovered) {
      section.style.background = `background: red`;
    }
    else {
      section.style.background = `background: black`;
    }

    requestAnimationFrame(animate);
  }

  animate();
});
