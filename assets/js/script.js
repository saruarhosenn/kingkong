/*============ Loader ============*/
var loader = document.querySelector(".section-loader");
window.addEventListener("load", vanish);

function vanish() {
  loader.classList.add("disppear");
};

/* ======== Sticky Navbar ======== */
var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("hide-navbar-on-scroll-down").style.top = "0";
    document.getElementById(
      "hide-navbar-on-scroll-down"
    ).style.backgroundColor = "#17131B";
  } else {
    document.getElementById("hide-navbar-on-scroll-down").style.top = "-200px";
    document.getElementById(
      "hide-navbar-on-scroll-down"
    ).style.backgroundColor = "transparent";
  }
  prevScrollpos = currentScrollPos;
};

/* ======== Language Select Modal ======== */
var modal = document.querySelector(".modal-wrapper");
var trigger = document.querySelector(".language-select-btn");
var closeButton = document.querySelector(".close-button");

function toggleModal() {
  modal.classList.toggle("show-modal");
};

function windowOnClick(event) {
  if (event.target === modal) {
    toggleModal();
  }
};

trigger.addEventListener("click", toggleModal);
closeButton.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);

/* ======== Navbar Menu Open Button ======== */
function myFunction(x) {
  x.classList.toggle("change");
};


