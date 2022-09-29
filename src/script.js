const imgs = document.getElementById("imgs");
const leftButton = document.getElementById("left");
const rightButton = document.getElementById("right");
const img = document.querySelectorAll("#imgs img");

console.log(img);

let idx = 0;

let interval = setInterval(run, 2000);

function run() {
  idx++;
  changeImage();
}

function changeImage() {
  if (idx > img.length - 1) {
    idx = 0;
  } else if (idx < 0) {
    idx = img.length - 1;
  }

  imgs.style.transform = `translateX(${-idx * 500}px)`;
}
