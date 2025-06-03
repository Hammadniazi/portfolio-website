const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");
menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  const icon = menuBtn.querySelector("i");
  if (navLinks.classList.contains("active")) {
    icon.classList.remove("fa-bars");
    icon.classList.add("fa-times");
  } else {
    icon.classList.remove("fa-times");
    icon.classList.add("fa-bars");
  }
});
// Close hamburger manu by clicking outside

document.addEventListener("click", (event) => {
  if (
    !event.target.closest(".navbar") &&
    navLinks.classList.contains("active")
  ) {
    navLinks.classList.remove("active");
    const icon = menuBtn.querySelector("i");
    icon.classList.remove("fa-times");
    icon.classList.add("fa-bars");
  }
});

// Close hamburger manu by clicking a link
navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    if (window.innerWidth <= 768) {
      navLinks.classList.remove("active");
      const icon = menuBtn.querySelector("i");
      icon.classList.remove("fa-times");
      icon.classList.add("fa-bars");
    }
  });
});
