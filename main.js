import { socialMedia } from "./data.js";

const containerDOM = document.querySelector(".nav-socailMedia");
const SidebarSocailDOM = document.querySelector(".sidebar-socailMedia");
const closeBTN = document.querySelector(".close-btn");
const sidebarDOM = document.querySelector(".sidebar");
const toggleBtn = document.querySelector(".toggle-btn");
const sidebarLinks = document.querySelectorAll(".sidebar-links a");
const navLinks = document.querySelectorAll(".nav-links a");
const navbarDOM = document.querySelector(".navbar");
const sidebarLogo = document.querySelector(".sidebarLogo");
const NavbarLogo = document.querySelector(".navbarLogo");

console.log(NavbarLogo);

let newArray = socialMedia.map((item) => {
  return `<a href="${item.link}"  target="_blank" key="${item.name}"  >${item.icon}</a>`;
});

containerDOM.innerHTML = newArray.join(" ");
SidebarSocailDOM.innerHTML = newArray.join(" ");

let lastScrollTop = 0;
const navbar = document.querySelector(".main-nav");
const navbarHeight = navbar.offsetHeight;

navbar.classList.remove("fixed");

window.addEventListener("scroll", () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {
    if (scrollTop > navbarHeight) {
      navbar.classList.add("fixed");
      navbar.classList.add("hidden");
    }
  }

  if (scrollTop < 100) {
    navbar.classList.remove("fixed");
  }

  if (scrollTop < lastScrollTop) {
    navbar.classList.remove("hidden");
  }

  lastScrollTop = scrollTop;
});

closeBTN.addEventListener("click", () => {
  sidebarDOM.classList.remove("open-sidebar");

  sidebarDOM.classList.add("close-sidebar");
});

toggleBtn.addEventListener("click", () => {
  sidebarDOM.classList.toggle("open-sidebar");
});

sidebarLinks.forEach((link) => {
  link.addEventListener("click", () => {
    sidebarDOM.classList.remove("open-sidebar");
    sidebarDOM.classList.add("close-sidebar");
  });
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    var targetId = link.getAttribute("data-target");
    var targetElement = document.getElementById(targetId);

    if (targetElement) {
      var topOfElement = targetElement.getBoundingClientRect().top;
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      var actualTop = topOfElement + scrollTop;
      const navbarHeight = navbarDOM.offsetHeight;

      window.scrollTo({
        top: actualTop - navbarHeight,
        behavior: "smooth",
      });
    }
  });
});

sidebarLinks.forEach((link) => {
  link.addEventListener("click", () => {
    var targetId = link.getAttribute("data-target");
    var targetElement = document.getElementById(targetId);

    if (targetElement) {
      var topOfElement = targetElement.getBoundingClientRect().top;
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      var actualTop = topOfElement + scrollTop;
      const navbarHeight = navbarDOM.offsetHeight;

      window.scrollTo({
        top: actualTop - navbarHeight,
        behavior: "smooth",
      });
    }
  });
});

sidebarLogo.addEventListener("click", () => {
  scrollTo({
    top: 0,
    behavior: "smooth",
  });

  sidebarDOM.classList.remove("open-sidebar");
  sidebarDOM.classList.add("close-sidebar");
});
NavbarLogo.addEventListener("click", () => {
  scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
