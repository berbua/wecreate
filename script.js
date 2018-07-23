/*$(document).ready(function() {
  $(".burger-header-nav").on("click", function() {
    $("header nav ul").toggleClass("open");
  });
});*/

//hamburger menu

let burger = document.querySelector(".burger-header-nav");
let menu = document.querySelector(".header nav ul");
burger.addEventListener("click", function() {
  menu.classList.toggle("open");
});

/*jakis tutorial, nie dzialalo za dobrze*/

/*window.onscroll = function() {
  myFunction();
};
let navbar = document.getElementById("navbar");
let sticky = navbar.offsetTop;
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}*/

/*miroslaw zelent */

$(document).ready(function() {
  let NavY = $(".nav").offset().top;

  let stickyNav = function() {
    let ScrollY = $(window).scrollTop();

    if (ScrollY > NavY) {
      $(".nav").addClass("sticky");
    } else {
      $(".nav").removeClass("sticky");
    }
  };

  stickyNav();

  $(window).scroll(function() {
    stickyNav();
  });
});
