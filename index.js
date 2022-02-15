'use strict';

let a = 0,
  b = 0,
  c = 0;
let hexValue, colorName;

const buttonEl = document.getElementById('flip-btn');
const body = document.querySelector('body');
const colorNameEl = document.querySelector('.current-clr-value');

const RGBGenerator = () => {
  return Math.floor(Math.random() * 255);
};

const setColor = () => {
  body.style.backgroundColor = hexValue;
  colorNameEl.style.color = hexValue;
  colorNameEl.innerText = colorName;
};

const fetchColor = function (r, g, b) {
  const url = `https://www.thecolorapi.com/id?rgb=rgb(${r},${g},${b})`;
  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      ({
        hex: { value: hexValue },
        name: { value: colorName },
      } = data);
      console.log(data);
    });
};
fetchColor(RGBGenerator(), RGBGenerator(), RGBGenerator());

buttonEl.addEventListener('click', function () {
  setColor();
  fetchColor(RGBGenerator(), RGBGenerator(), RGBGenerator());
});
