'use strict';

const url = 'https://www.thecolorapi.com/id?hex=0047AB';
let hexValue, colorName;

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

const display = () => {
  console.log(hexValue, colorName);
};

const timer = setTimeout(display, 3000);
