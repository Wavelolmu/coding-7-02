function reset() {
  window.location.reload()
}

let box = document.querySelector(".box")

function paintItBlack() {
  box.style.backgroundColor = "black";
  box.style.animation = "none"
}

function makeItCircle() {
  box.style.borderRadius = "50%"
}

function move() {
  box.style.transform = "translate(100px, 100px)"
}

function makeItBlink() {
  box.style.animation = "blink 0.2s linear infinite"
}

function addText() {
  document.querySelector('.box').textContent = document.getElementById("textInput").value;
}

function customColor() {
  box.style.backgroundColor = document.getElementById('colorInput').value;
  box.style.animation = "none"
}
