const rocket = document.querySelector('.rocket-body');
let isDragging = false;

document.addEventListener('mousedown', (e) => {
  const rect = rocket.getBoundingClientRect();
  const inside = (
    e.clientX >= rect.left &&
    e.clientX <= rect.right &&
    e.clientY >= rect.top &&
    e.clientY <= rect.bottom
  );

  if (inside) {
    isDragging = !isDragging;
  }
});

document.addEventListener('mousemove', (e) => {
  if (isDragging) {
    rocket.style.left = `${e.clientX}px`;
    rocket.style.top = `${e.clientY}px`;
    rocket.style.transform = 'translate(-50%, -50%)';
  }
});
