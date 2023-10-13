// script to rotate logo letter
const letterR = document.getElementById("letterR");

letterR.addEventListener("mouseover", function() {
  // Rotate 360 degrees when hovered
    this.style.transform = "rotate(360deg)";
});

letterR.addEventListener("mouseout", function() {
  // Return to original state when mouse leaves
    this.style.transform = "rotate(0deg)";
});

// script to detect the scroll position and adjust the navbar properties
window.addEventListener("scroll", function() {
  const navbar = document.getElementById("navbar");
  if (this.window.scrollY > 50) {
    navbar.style.height = "50px";
    navbar.style.backgroundColor = "#000";
  } else {
    navbar.style.height = "5em";
    navbar.style.backgroundColor = "transparent";
  }
});
