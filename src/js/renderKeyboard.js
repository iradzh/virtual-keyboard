export function renderKeyboard(keys) {
  const container = document.querySelector(".keyboard-container");

  keys.forEach((key) => {
    const button = document.createElement("button");
    button.innerText = key.label;

    button.setAttribute("data-code", key.code);
    button.classList.add("key");

    button.addEventListener("click", (event) => {
      const clickedButton = event.target;
      const key = clickedButton.getAttribute("data-code");
      const textArea = document.querySelector(".text-area");
      textArea.value += key.key;
    });

    container.appendChild(button);
  });
}
