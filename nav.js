document.addEventListener("DOMContentLoaded", function () {
  var toggle = document.querySelector(".nav-toggle");
  var menu = document.getElementById("primary-menu");

  if (!toggle || !menu) {
    return;
  }

  toggle.addEventListener("click", function () {
    var isOpen = menu.classList.toggle("open");
    toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });
});
