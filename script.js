/*$(document).ready(function() {
  $(".burger-header-nav").on("click", function() {
    $("header nav ul").toggleClass("open");
  });
});*/

//hamburger menu

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

/*sticky nav*/

// $(document).ready(function() {
//   let NavY = $(".nav").offset().top;

//   let stickyNav = function() {
//     let ScrollY = $(window).scrollTop();

//     if (ScrollY > NavY) {
//       $(".nav").addClass("sticky");
//     } else {
//       $(".nav").removeClass("sticky");
//     }
//   };

//   stickyNav();

//   $(window).scroll(function() {
//     stickyNav();
//   });
// });
