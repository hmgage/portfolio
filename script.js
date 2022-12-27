const addlInfo = document.getElementsByClassName('addl-info');
// console.log("🚀 ~ file: script.js:2 ~ addlInfo", addlInfo)

const infoButton = document.getElementsByClassName('show-more');
// console.log("🚀 ~ file: script.js:5 ~ infoButton", infoButton)

const closeButton = document.getElementsByClassName('close-btn');
// console.log("🚀 ~ file: script.js:8 ~ closeButton", closeButton)

const showInfo = function (index) {
    addlInfo[index].style.display = 'block';
    infoButton[index].style.display = 'none';
}

function closeInfo(index) {
    addlInfo[index].style.display = '';
    infoButton[index].style.display = '';
}

infoButton[0].onclick = function () {
    showInfo(0);
}

infoButton[1].onclick = function () {
    showInfo(1);
}

closeButton[0].onclick = function () {
    closeInfo(0);
}

closeButton[1].onclick = function () {
    closeInfo (1);
}
