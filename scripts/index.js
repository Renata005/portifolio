const button = document.querySelector(".burguer");
const navbarLinks = document.querySelector(".navbar__links");

button.addEventListener("click", () => {
  navbarLinks.classList.toggle("active");
});
