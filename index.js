const body = document.querySelector("body");
const rgb = document.querySelector("div");

const randomRgb = (number) => {
  number = Math.floor(Math.random() * 255);
  return number;
};

const displayRgb = () => {
  let rgb1, rgb2, rgb3;
  rgb1 = randomRgb(rgb1);
  rgb2 = randomRgb(rgb2);
  rgb3 = randomRgb(rgb3);

  body.style.background = `rgb(${rgb1},${rgb2},${rgb3})`;
  rgb.textContent = `rgb(${rgb1},${rgb2},${rgb3})`;
};

let interval = setInterval(() => {
  displayRgb();
}, 2000);
