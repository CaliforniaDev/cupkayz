

window.onload = init;

function init() {
  let navbar = document.getElementById("navbar");
  let sticky = navbar.offsetTop;
  let navbarContent = document.getElementById("navbar-content");
  let closeButton =
  document.getElementById("closeBtn");

window.onscroll = () => stickyNavbar();
let stickyNavbar = () => {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  };
};
// adds class as soon as the page loads
navbar.classList.add("overlay");
navbarContent.classList.add("overlay-content");
// adds class as soon as the page loads

function addCurtainOverlay() {
  let w = document.documentElement.clientWidth;
  let h = document.documentElement.clientHeight;
  if (w <= 600) {
    navbar.style.width ="0%";
    navbar.classList.add("overlay");
    navbarContent.classList.add("overlay-content");
  } else {
    navbar.style.width="100%";
    navbar.classList.remove("overlay");
    navbarContent.classList.remove("overlay-content");
    // closeButton.parentNode.removeChild("a");
  };
}


// adds or removes navbar curtain as window resizes
window.addEventListener("resize", addCurtainOverlay);

// end of init
}
function openNav() {
  navbar.style.width ="100%";
}
function closeNav() {
  navbar.style.width ="0%";
}





//end of onload
