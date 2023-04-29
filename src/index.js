import { createBase } from "./js/createBase";
import { renderKeyboard } from "./js/renderKeyboard";
import { handlePhysicalKeyboardInput } from "./js/handlePhysicalKeyboardInput";
window.onload = function () {
  createBase();

  fetch("./assets/keysENG.json")
    .then((response) => response.json())
    .then((data) => {
      renderKeyboard(data);
      handlePhysicalKeyboardInput();
    });
};
