// ========================================================
// Interaktiver Hintergrund – Optimierte Version
// shared/js/background.js
// ========================================================

export function initBackground() {
  const canvas = document.createElement("canvas");
  canvas.className = "background-canvas";
  document.body.prepend(canvas);

  const ctx = canvas.getContext("2d");

  let width, height, dpr;
  let mouseActive = false;
  let lastMouseMove = 0;
  let animationFrame;
  let resizeObserver = null;

  const balls = generateBalls(12);

  /* ------------------ Setup ------------------ */

  function resize() {
    dpr = window.devicePixelRatio || 1;
    width = window.innerWidth;
    height = window.innerHeight;

    canvas.width = width * dpr;
    canvas.height = height * dpr;

    canvas.style.width = width + "px";
    canvas.style.height = height + "px";

    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }

  function generateBalls(count) {
    const colors = [
      [201, 168, 124],
      [141, 110, 76],
      [122, 158, 126]
    ];

    return Array.from({ length: count }, () => {
      const color = colors[Math.floor(Math.random() * colors.length)];
      return {
        x: Math.random(),
        y: Math.random(),
        size: 60 + Math.random() * 180,
        speedX: (Math.random() - 0.5) * 0.002,
        speedY: (Math.random() - 0.5) * 0.002,
        color,
        glow: 0
      };
    });
  }

  /* ------------------ Mouse ------------------ */

  function handleMouse(e) {
    mouseActive = true;
    lastMouseMove = performance.now();
  }

  window.addEventListener("mousemove", handleMouse);
  window.addEventListener("resize", resize);

  /* ------------------ Draw ------------------ */

  function drawBall(ball, time) {
    ball.x = (ball.x + ball.speedX) % 1;
    ball.y = (ball.y + ball.speedY) % 1;

    let x = ball.x;
    let y = ball.y;

    if (mouseActive && performance.now() - lastMouseMove < 1200) {
      // Mausposition wird direkt im Event verwendet – keine globalen mouseX/mouseY nötig
      ball.glow = Math.min(0.4, ball.glow + 0.02);
    } else {
      ball.glow *= 0.98;
    }

    const posX = x * width;
    const posY = y * height;
    const size = ball.size + Math.sin(time * 0.002) * 5;

    const [r, g, b] = ball.color;
    const baseOpacity = 0.35 + ball.glow * 0.3;

    const gradient = ctx.createRadialGradient(posX, posY, 0, posX, posY, size);
    gradient.addColorStop(0, `rgba(${r}, ${g}, ${b}, ${baseOpacity})`);
    gradient.addColorStop(0.5, `rgba(${r}, ${g}, ${b}, ${baseOpacity * 0.6})`);
    gradient.addColorStop(1, `rgba(${r}, ${g}, ${b}, 0)`);

    ctx.beginPath();
    ctx.arc(posX, posY, size, 0, Math.PI * 2);
    ctx.fillStyle = gradient;
    ctx.fill();
  }

  /* ------------------ Animation ------------------ */

  function animate(time) {
    ctx.clearRect(0, 0, width, height);
    balls.forEach(ball => drawBall(ball, time));
    animationFrame = requestAnimationFrame(animate);
  }

  /* ------------------ Init ------------------ */

  resize();
  animationFrame = requestAnimationFrame(animate);

  /* ------------------ Cleanup ------------------ */

  return function destroy() {
    cancelAnimationFrame(animationFrame);
    window.removeEventListener("mousemove", handleMouse);
    window.removeEventListener("resize", resize);
    canvas.remove();
  };
}