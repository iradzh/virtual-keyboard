export function handlePhysicalKeyboardInput() {
  document.addEventListener("keydown", (event) => {
    event.preventDefault();

    const keyPressed = event.code;
    const keys = document.querySelectorAll(".key");
    const textArea = document.querySelector(".text-area");
    keys.forEach((key) => {
      if (key.getAttribute("data-code") === keyPressed) {
        textArea.value += key.innerText;
      }
    });
  });
}
