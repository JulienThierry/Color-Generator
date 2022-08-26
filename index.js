const rgb = document.querySelector("div");

const displayRgb = () => {
  let rgb1, rgb2, rgb3;
  rgb1 = Math.floor(Math.random() * 255);
  rgb2 = Math.floor(Math.random() * 255);
  rgb3 = Math.floor(Math.random() * 255);

  document.body.style.background = `rgb(${rgb1},${rgb2},${rgb3})`;
  rgb.textContent = `rgb(${rgb1},${rgb2},${rgb3})`;
};

setInterval(() => {
  displayRgb();
}, 2000);
