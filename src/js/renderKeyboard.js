export function renderKeyboard(keys) {
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
      const key = keys.find((k) => k.code === code);
      textArea.value += key.keyENG;
    });

    container.appendChild(button);
  });
}
