import { createBase } from "./js/createBase";
import { renderKeyboard } from "./js/renderKeyboard";

window.onload = function () {
  createBase();

  fetch("./assets/keysENG.json")
    .then((response) => response.json())
    .then((data) => {
      renderKeyboard(data);
    });
};
