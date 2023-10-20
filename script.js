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
    navbar.style.width = "100%";
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

$(document).ready(function () {
  // Fade-in animation for "About Me"
  $("#about-me").hide().fadeIn(3000);

  let offsetAdjustment = 0;
  if (window.innerWidth < 768) {
      offsetAdjustment = 600;
  }

  $(window).on('scroll resize', function () {  // Added resize event too
      var scrollPos = $(window).scrollTop();
      var windowHeight = $(window).height();

      // Experience animations
      if (scrollPos + windowHeight > $('.experience-container').offset().top + offsetAdjustment) {
          $('.tech-grid-icons').each(function (i) {
              setTimeout(function () {
                  $('.tech-grid-icons').eq(i).animate({
                      left: '0',
                      opacity: '1'
                  }, 2000);
              }, 200 * (i + 1));
          });

          $('.cert-grid-icons').each(function (i) {
              setTimeout(function () {
                  $('.cert-grid-icons').eq(i).animate({
                      right: '0',
                      left: 'auto',
                      opacity: '1'
                  }, 2000);
              }, 200 * (i + 1));
          });
      }

      // School animations
      if (scrollPos + windowHeight > $('.school-header-container').offset().top + offsetAdjustment) {
          $('#school-title').addClass('slide-in-from-left');
          $('.school-header .big-header').addClass('slide-in-from-right');
          $('.school-header p').addClass('slide-in-from-left');
      }

      // Project animations
      var windowBottom = scrollPos + windowHeight;
      $(".project-container .project1, .project-container .project2").each(function () {
          var objectBottom = $(this).offset().top + $(this).outerHeight();
          if (objectBottom < windowBottom) {
              if ($(this).css("opacity") == 0) {
                  $(this).fadeTo(500, 2).css('transform', 'translateX(0)');
              }
          } else {
              if ($(this).css("opacity") == 1) {
                  $(this).fadeTo(500, 0).css('transform', 'translateX(100px)');
              }
          }
      });
  }).trigger('scroll');  // Trigger scroll handler on page-load

  // Contact information animation
  const formContainer = document.querySelector('.contact-form-container');
  let observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              formContainer.style.opacity = '1';
              formContainer.style.transform = 'translateY(0)';
          }
      });
  }, {
      threshold: 0.5
  });
  observer.observe(formContainer);
});


//sidenav bar

document.addEventListener('DOMContentLoaded', () => {
  const sidebar = document.getElementById('sidebar');

  let observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        sidebar.style.width = "200px";
      } else {
        sidebar.style.width = "30px";
      }
    });
  }, {
    threshold: 0.1
  });

  observer.observe(document.body);
});

// hamburger menu

document.getElementById('menu-toggle').addEventListener('click', function() {
  let navbar = document.getElementById('navbar');
  let sidebar = document.getElementById('sidebar');

  navbar.style.display = (navbar.style.display === 'none' || navbar.style.display === '') ? 'block' : 'none';
  sidebar.style.display = (sidebar.style.display === 'none' || sidebar.style.display === '') ? 'block' : 'none';
});




