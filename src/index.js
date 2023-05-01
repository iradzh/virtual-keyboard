import createBase from "./js/createBase";
import renderKeyboard from "./js/renderKeyboard";
import handlePhysicalKeyboardInput from "./js/handlePhysicalKeyboardInput";

window.onload = function handleLoading() {
  createBase();
  fetch("./assets/keys.json")
    .then((response) => response.json())
    .then((data) => {
      renderKeyboard(data);
      handlePhysicalKeyboardInput();
    });
};
