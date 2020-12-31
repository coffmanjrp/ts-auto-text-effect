const textEl = document.getElementById('text') as HTMLHeadingElement;
const speedEl = document.getElementById('speed') as HTMLInputElement;
// const text = 'We Love Programming!';
const text = textEl.innerText;
let idx = 1;
let speed = 300 / speedEl.value;

function writeText() {
  textEl.innerText = text.slice(0, idx);

  idx++;

  if (idx > text.length) {
    idx = 1;
  }

  setTimeout(writeText, speed);
}

writeText();

speedEl.addEventListener('input', (e) => {
  speed = 300 / e.target.value;
});
