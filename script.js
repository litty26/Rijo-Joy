const menuBtn = document.getElementById("menuBtn");
const navbar = document.getElementById("navbar");

menuBtn.addEventListener("click", () => {
navbar.classList.toggle("active");
});

window.addEventListener("scroll", () => {
navbar.classList.remove("active");
});