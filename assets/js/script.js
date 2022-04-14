const mobileBtn = document.getElementById("mobile-nav");
const mobileMenu = document.getElementById("mobile-menu");
const closeBtn = document.getElementById('close-modal');

const body = document.querySelector("body");

mobileBtn.onclick = () => {
  body.style.overflow = "hidden";
  mobileMenu.style.display = "block";
};

closeBtn.onclick = () => {
  mobileMenu.style.display = "none";
  body.style.overflow = "auto";
};
