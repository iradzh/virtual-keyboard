window.onload = function () {
  const textArea = document.createElement("textarea");

  const keyboardContainer = document.createElement("div");
  keyboardContainer.classList.add("keyboard-container");

  document.body.appendChild(textArea);
  document.body.appendChild(keyboardContainer);
};
