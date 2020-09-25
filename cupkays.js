

window.onload = init;

function init() {
  let navbar = document.getElementById("navbar");
  let sticky = navbar.offsetTop;
  let navbarContent = document.getElementById("navbar-content")

window.onscroll = () => stickyNavbar();
let stickyNavbar = () => {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  };
}

function addCurtainOverlay() {
  let w = document.documentElement.clientWidth;
  let h = document.documentElement.clientHeight;
  if (w <= 600) {
    navbar.classList.add("overlay");
    navbarContent.classList.add("overlay-content");
  } else {
    navbar.classList.remove("overlay");
    navbarContent.classList.remove("overlay-content");
  };

}
// adds or removes navbar curtain as window resizes
window.addEventListener("resize", addCurtainOverlay);

// end of init
}





//end of onload
