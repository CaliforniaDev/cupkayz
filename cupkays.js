

window.onload = function() {


window.onscroll = () => myFunction();
var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}
function displayWindowSize() {

    if (window.pageYOffset >= sticky) {
      navbar.classList.add("sticky");
    } else {
      navbar.classList.remove("sticky");
    }
  let w = document.documentElement.clientWidth;
  let h = document.documentElement.clientHeight;

  document.getElementById("result").innerHTML = "Width: " +
                                        w + ", " + "Height: " + h;
}

window.addEventListener("resize", displayWindowSize);






//end of onload
};
