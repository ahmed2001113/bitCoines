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

function colseSidePar2(){
  sideBar.style.right = '100vw';
}
//  ------------------------------------------- animation

function copyText() {
  var text = document.getElementById("textToCopy");
  var text2 = document.getElementById("textToCopy2");

  var range = document.createRange();
  range.selectNode(text);

  window.getSelection().removeAllRanges(); // Clear current selection
  window.getSelection().addRange(range);

  document.execCommand("copy");

  window.getSelection().removeAllRanges();

  var range2 = document.createRange();
  range2.selectNode(text2);

  window.getSelection().removeAllRanges(); // Clear current selection
  window.getSelection().addRange(range2);

  document.execCommand("copy");

  window.getSelection().removeAllRanges();
}



function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
  const elementHalfwayPoint = rect.top + (rect.height / 2);

  return (
      elementHalfwayPoint >= 0 
      &&
      elementHalfwayPoint <= viewportHeight
  );
}
  
  
  function handleScroll() {
    const animatedElements = document.querySelectorAll('.animated');   
    animatedElements.forEach(element => {
      if (isInViewport(element)) {
        element.classList.add('animate');
      } else {
        element.classList.remove('animate');
      }
    });

    const animatedElement2 = document.querySelectorAll('.animated2');   
    animatedElement2.forEach(element => {
      if (isInViewport(element)) {
        element.classList.add('animate2');
      } else {
        element.classList.remove('animate2');
      }
    });

    const animatedElement3 = document.querySelectorAll('.animated3');   
    animatedElement3.forEach(element => {
      if (isInViewport(element)) {
        element.classList.add('animate3');
      } else {
        element.classList.remove('animate3');
      }
    });

    const animatedElement4 = document.querySelectorAll('.animated4');   
    animatedElement4.forEach(element => {
      if (isInViewport(element)) {
        element.classList.add('animate4');
      } else {
        element.classList.remove('animate4');
      }
    });

    const animatedElement5 = document.querySelectorAll('.animated5');   
    animatedElement5.forEach(element => {
      if (isInViewport(element)) {
        element.classList.add('animate5');
      } else {
        element.classList.remove('animate5');
      }
    });
  }
  
  window.addEventListener('scroll', handleScroll);
   

function changeStylesheet() {
  var link = document.getElementById('stylesheet');
  if (window.innerWidth > 800) {
    link.href = 'css2.css'; 
  } else {
    link.href = 'css.css';
  }
}
changeStylesheet();
window.addEventListener('resize', changeStylesheet);

