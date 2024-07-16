const navScroll = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY >= 20) {
    navScroll.classList.add("navbar-scrolled");
  } else if (window.scrollY < 20) {
    navScroll.classList.remove("navbar-scrolled");
  }
});

$(document).ready(function () {
  $("#rpjmd").DataTable({});
});
