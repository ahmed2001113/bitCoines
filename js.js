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

  var range = document.createRange();
  range.selectNode(text);

  window.getSelection().removeAllRanges(); // Clear current selection
  window.getSelection().addRange(range);

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
          // Stop and remove the video when closing the popup
          var video = Swal.getContent().querySelector('video');
          video.pause();
          video.removeAttribute('src');
          video.load();
      }
  });
}

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
   

