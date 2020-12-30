"use strict";
var textEl = document.getElementById('text');
var speedEl = document.getElementById('speed');
var text = 'We Love Programming!';
var idx = 1;
var speed = 300 / speedEl.value;
function writeText() {
    textEl.innerText = text.slice(0, idx);
    idx++;
    if (idx > text.length) {
        idx = 1;
    }
    setTimeout(writeText, speed);
}
writeText();
speedEl.addEventListener('input', function (e) {
    speed = 300 / e.target.value;
});
