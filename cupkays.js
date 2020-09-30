

window.onload = init;


function init() {
  let navbar = document.getElementById("navbar");
  let sticky = navbar.offsetTop;
  let navbarContent = document.getElementById("navbar-content");
  let openButton = document.getElementById("openButton")
  let closeButton = document.getElementById("closeButton");
  window.onscroll = () => stickyNavbar();
  window.addEventListener("onload", addCurtainOverlay());
  window.addEventListener("resize", addCurtainOverlay);
function stickyNavbar() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
    //openButton.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
    //openButton.classList.remove("sticky");
  };
};

function addCurtainOverlay() {
  let w = document.documentElement.clientWidth;
  let h = document.documentElement.clientHeight;

  if (w <= 600) {
    navbar.style.width ="0";
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


// end of init
}
// end of init


let resizeTimer;
window.addEventListener("resize", () => {
  document.body.classList.add("resize-animation-stopper");
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    document.body.classList.remove("resize-animation-stopper");
  }, 400);
});

// Navbar Open-Close //
function openNav() {
  navbar.style.width ="100%";
}
function closeNav() {
  navbar.style.width ="0%";
}
//
