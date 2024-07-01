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

// const content = document.querySelector('.content');

// let lastScrollTop = 0;
// window.addEventListener('scroll', () => {
//     const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
//     if (currentScroll > lastScrollTop) {
//         content.classList.add('animate');
//     } else {
//         content.classList.remove('animate');
//     }
//     lastScrollTop = currentScroll;
// });
