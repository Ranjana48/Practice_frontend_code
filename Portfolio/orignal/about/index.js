const circle = document.getElementById("circle");

document.addEventListener("mousemove", (e) => {
  const x = e.clientX;
  const y = e.clientY;
  circle.style.transform = `translate(${x}px, ${y}px)`;
});
