export default function renderKeyboard(keys) {
  const container = document.querySelector(".keyboard-container");

  keys.forEach((key) => {
    const button = document.createElement("button");
    button.innerText = key.keyENG;
    button.style.width = key.width;

    button.setAttribute("data-code", key.code);
    button.classList.add("key");

    button.addEventListener("click", (event) => {
      const clickedButton = event.target;
      const code = clickedButton.getAttribute("data-code");
      const textArea = document.querySelector(".text-area");

      if (code === "Space") {
        textArea.value += " ";
      } else if (code === "Backspace") {
        textArea.value = textArea.value.slice(0, -1);
      } else if (code === "Enter") {
        textArea.value += "\n";
      } else if (key && key.keyENG.match(/[a-zA-Z0-9]/)) {
        textArea.value += key.keyENG;
      }
    });

    container.appendChild(button);
  });
}
