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

document.getElementById('hero-video_1').addEventListener('click', function() {
  var videoPath = this.getAttribute('data-video-path');
  playVideo(videoPath);
});



document.getElementById('hero-video_2').addEventListener('click', function() {
  var videoPath = this.getAttribute('data-video-path');
  playVideo(videoPath);
});

document.getElementById('hero-video_3').addEventListener('click', function() {
  var videoPath = this.getAttribute('data-video-path');
  playVideo(videoPath);
});



function playVideo(videoPath) {
  Swal.fire({
      html: `<video width="100%" controls autoplay><source src="${videoPath}" type="video/mp4"></video>`,
      showConfirmButton: false,
      showCloseButton: true,
      customClass: 'swal-wide',
      onOpen: () => {
          // Pause the video on open
          var video = Swal.getContent().querySelector('video');
          video.pause();
      },
      onClose: () => {
          var video = Swal.getContent().querySelector('video');
          video.pause();
          video.removeAttribute('src');
          video.load();
      }
  });
}

function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
  const elementHalfwayPoint = rect.top + (rect.height / 2);

  return (
      elementHalfwayPoint >= 0 &&
      elementHalfwayPoint <= viewportHeight
  );
}
//   function isInViewport(element) {
//     const rect = element.getBoundingClientRect();
//     return (
//         rect.top <= window.innerHeight / 2 &&
//         rect.bottom >= window.innerHeight / 2
//     );
// }
  
  
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
   

// Function to change stylesheet based on viewport width
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

