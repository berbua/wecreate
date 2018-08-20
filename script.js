//hamburger menu

const burgerMenu = () => {
  const burger = document.querySelector(".burger-header-nav");
  const h2 = document.querySelector("header h2");
  const menu = document.querySelector(".nav-list");
  const links = menu.querySelectorAll("a");
  burger.addEventListener("click", function() {
    menu.classList.toggle("open");
    h2.classList.toggle("open");
    links.forEach(link =>
      link.addEventListener("click", function() {
        menu.classList.remove("open");
      })
    );
  });
};

burgerMenu();
