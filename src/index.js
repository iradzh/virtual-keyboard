import renderLayout from "./js/renderLayout";
import renderKeyboard from "./js/renderKeyboard";
import handlePhysicalKeyboardInput from "./js/handlePhysicalKeyboardInput";

window.onload = function handleLoading() {
  renderLayout();
  fetch("./assets/keys.json")
    .then((response) => response.json())
    .then((data) => {
      renderKeyboard(data);
      handlePhysicalKeyboardInput();
    });
};
