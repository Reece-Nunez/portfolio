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


// advanced scrolling
$("a").on('click', function(event) {
  if (this.hash !== "") {
    event.preventDefault();
    var hash = this.hash;
    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 800, function(){
      window.location.hash = hash;
    });
  }
});

// title animation

$(document).ready(function() {
  $("#about-me").hide().fadeIn(3000);
});

// experience animation

$(document).ready(function() {
  $(window).scroll(function() {
    var scrollPos = $(window).scrollTop();
    var windowHeight = $(window).height();
    var elementPos = $('.experience-container').offset().top;

    // Check if the .experience-container is in the viewport
    if (scrollPos + windowHeight > elementPos) {

      // Animate tech icons from the left
      $('.tech-grid-icons').each(function(i) {
        setTimeout(function() {
          $('.tech-grid-icons').eq(i).animate({
            left: '0',
            opacity: '1'
          }, 2000);
        }, 200 * (i + 1));
      });

      // Animate cert icons from the right
      $('.cert-grid-icons').each(function(i) {
        setTimeout(function() {
          $('.cert-grid-icons').eq(i).animate({
            right: '0',
            left: 'auto',
            opacity: '1'
          }, 2000);
        }, 200 * (i + 1));
      });

    }
  });
});

//experience animation

$(document).ready(function() {
  // Set elements to be hidden initially
  $(".school-header h1, .school-header h2, .school-header p").addClass("hidden");

  $(window).scroll(function() {
    var scrollPos = $(window).scrollTop();
    var windowHeight = $(window).height();
    var elementPos = $('.school-header-container').offset().top;

    // Check if the element is in the viewport
    if (scrollPos + windowHeight > elementPos) {
      $('#school-title').addClass('slide-in-from-left');
      $('.school-header .big-header').addClass('slide-in-from-right');
      $('.school-header p').addClass('slide-in-from-left');
    }
  });
});

// project animation

$(document).ready(function(){
  $(window).scroll(function(){
      var windowBottom = $(this).scrollTop() + $(this).innerHeight();
      
      $(".project-container .project1, .project-container .project2").each(function(){
          /* Check the location of each desired element */
          var objectBottom = $(this).offset().top + $(this).outerHeight();
          
          /* If the element is completely within bounds of the window, fade it in */
          if (objectBottom < windowBottom) {
              if ($(this).css("opacity")==0) {$(this).fadeTo(500,2).css('transform', 'translateX(0)');}
          } else { //object comes into view (scrolling up)
              if ($(this).css("opacity")==1) {$(this).fadeTo(500,0).css('transform', 'translateX(100px)');}
          }
      });
  }).scroll(); //invoke scroll-handler on page-load
});

//contact information animation

document.addEventListener('DOMContentLoaded', () => {
  const formContainer = document.querySelector('.contact-form-container');

  let observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              formContainer.style.opacity = '1';
              formContainer.style.transform = 'translateY(0)';
          }
      });
  }, {
      threshold: 0.5 // Trigger when at least 10% of the element is in the viewport
  });

  observer.observe(formContainer);
});




