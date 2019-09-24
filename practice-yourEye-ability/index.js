const startBtn = document.querySelector('#page-one button');
const pageOne = document.querySelector('#page-one');
startBtn.addEventListener('click', function() {
    // 关掉第一屏幕内容
    pageOne.style.display = 'none';
});



// function init() {
//     var width = document.documentElement.clientWidth;
//     document.documentElement.style.fontSize = width / 10 + 'px';
// }

// init();
// window.onresize = function() {
//     init();
// }