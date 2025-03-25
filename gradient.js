document.addEventListener("DOMContentLoaded", () => {
  const section = document.querySelector(".section");

  let targetX = 0;
  let targetY = 0;
  let currentX = 0;
  let currentY = 0;
  const easeFactor = 0.1;

  document.addEventListener("mousemove", (e) => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    targetX = (mouseX / windowWidth) * 100;
    targetY = (mouseY / windowHeight) * 100;
  });

  function animate() {
    currentX += (targetX - currentX) * easeFactor;
    currentY += (targetY - currentY) * easeFactor;

    section.style.background = `linear-gradient(90deg, 
      rgb(20, 20, 20) 0%, 
      rgb(47, 47, 47) ${currentX}%, 
      rgb(20, 20, 20) 100%)`;

    requestAnimationFrame(animate);
  }

  animate();
});
