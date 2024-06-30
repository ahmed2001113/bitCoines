var openSideBar = document.getElementById('openSideBar');
var closeSideBar = document.getElementById('closeSideBar');
var sideBar = document.getElementById('sideBar');

openSideBar.addEventListener('click', function() {
    sideBar.style.right = '0vw';
});

closeSideBar.addEventListener('click', function() {
    sideBar.style.right = '100vw';
});
