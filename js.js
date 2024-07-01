var openSideBar = document.getElementById('openSideBar');
var closeSideBar = document.getElementById('closeSideBar');
var sideBar = document.getElementById('sideBar');
var homeSection = document.getElementById('homeSection');
var swapSection = document.getElementById('swapSection');
var swapNow = document.getElementById('swapNow');

openSideBar.addEventListener('click', function() {
    sideBar.style.right = '0vw';
});

closeSideBar.addEventListener('click', function() {
    sideBar.style.right = '100vw';
});

swapNow.addEventListener('click', function() {
    homeSection.style.display = 'none';
    swapSection.style.display = 'block';
});

//  ------------------------------------------- animation

// Function to check if an element is in viewport
// Function to check if an element is in viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
  
  // Function to handle scroll event for multiple elements
  function handleScroll() {
    const animatedElements = document.querySelectorAll('.animated'); // Select all elements with class 'animated'
  
    animatedElements.forEach(element => {
      if (isInViewport(element)) {
        element.classList.add('animate');
      } else {
        element.classList.remove('animate');
      }
    });
  }
  
  // Attach scroll event listener
  window.addEventListener('scroll', handleScroll);
  
